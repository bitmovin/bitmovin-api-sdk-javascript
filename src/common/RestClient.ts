import * as e6p from 'es6-promise';
import * as urljoin from 'url-join';
import * as isomorphicFetch from 'isomorphic-fetch';

import { RequiredError } from './BaseAPI';
import Configuration from './Configuration';
import Logger from './Logger';
import NullLogger from './NullLogger';
import { buildBitmovinError, buildBitmovinErrorFromError } from './BitmovinErrorBuilder';

(e6p as any).polyfill();

const BASE_URL = 'https://api.bitmovin.com/v1';

export type FetchAPI = (url: string, init?: any) => Promise<Response>;

function prepareUrlParameterValue(parameterValue: any) {
  if (parameterValue instanceof Date) {
    return parameterValue.toISOString().replace(/\.\d+Z/, 'Z');
  }
  return parameterValue;
}

function queryParams(params) {
  if (!params) {
    return '';
  }

  let queryParameterString = '';
  let addSeperator = false;

  for (const key of Object.keys(params)) {
    if (params[key] != null && typeof params[key] !== 'function' && params[key] !== "") {
      queryParameterString += (addSeperator ? '&' : '') + encodeURIComponent(key) + '=' + encodeURIComponent(prepareUrlParameterValue(params[key]));
      addSeperator = true;
    }
  }

  return queryParameterString;
}

function prepareUrl(baseUrl: string, url: string, urlParameterMap: any, queryStringParameters: any): URL {
  let modifiedUrl = url;

  if (urlParameterMap) {
    for (const key of Object.keys(urlParameterMap)) {
      if (urlParameterMap[key] instanceof Date) {
        let date: Date = urlParameterMap[key];

        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        const padStart = input => input < 10 ? '0' + input : new String(input);

        urlParameterMap[key] = `${yyyy}-${padStart(mm)}-${padStart(dd)}`;
      }

      modifiedUrl = modifiedUrl.replace(new RegExp(`{${key}}`), urlParameterMap[key]);
    }
  }

  if (modifiedUrl.search('{|}') > 0) {
    throw new Error('After replacing ' + url + ' with parameter map ' + JSON.stringify(urlParameterMap) + ' there are still some placeholders left for replacing. Please make sure to provide a urlParameterMap that replaces all placeholders');
  }

  modifiedUrl = urljoin(baseUrl, modifiedUrl);

  const queryString = queryParams(queryStringParameters);
  if (queryString) {
    modifiedUrl = urljoin(modifiedUrl, `?${queryString}`);
  }

  return new URL(modifiedUrl);
}

export function copyAndPrepareBody(value: any): any {
  if (value == undefined || value == null) {
    return undefined;
  }

  if (value instanceof Date) {
    return value;
  }

  if (isPrimitive(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    if (value.length == 0) {
      return undefined;
    }

    return value.map((element) => copyAndPrepareBody(element));
  }

  const cloned = {};

  for (const property of Object.keys(value)) {
    const clonedProperty = copyAndPrepareBody(value[property]);
    if (clonedProperty == undefined) {
      continue;
    }
    cloned[property] = clonedProperty;
  }

  return cloned;
}

function isPrimitive(arg: any): boolean {
  var type = typeof arg;
  return arg == null || (type != 'object' && type != 'function');
}

export class RestClient {
  private readonly GET = 'GET';
  private readonly PATCH = 'PATCH';
  private readonly POST = 'POST';
  private readonly PUT = 'PUT';
  private readonly DELETE = 'DELETE';

  private readonly apiKey: string;
  private readonly tenantOrgId?: string;
  private readonly baseUrl: string;
  private readonly fetch: FetchAPI;
  private readonly logger: Logger;
  private readonly headers?: Record<string, string>;
  private readonly httpHandler: HttpHandler;

  constructor(configuration: Configuration) {
    if (!configuration) {
      throw new RequiredError('Configuration must be initialized!');
    }

    if (!configuration.apiKey) {
      throw new RequiredError('Api key must be set!');
    }

    this.apiKey = configuration.apiKey;
    this.tenantOrgId = configuration.tenantOrgId;
    this.baseUrl = configuration.baseUrl || BASE_URL;
    this.fetch = configuration.fetch || isomorphicFetch;
    this.logger = configuration.logger || new NullLogger();
    this.headers = configuration.headers;

    this.httpHandler = this.buildHttpHandler();
  }

  private buildHttpHandler(): HttpHandler {
    let handlers: DelegatingHandler[] = [
      new HeaderHandler(this.apiKey, this.tenantOrgId, this.headers),
      new ErrorHandler(),
      new LoggingHandler(this.logger)
    ];

    const httpHandler =
      handlers.reduce((innerHandler, outerHandler) => {
        outerHandler.innerHandler = innerHandler;
        return outerHandler;
      }, new FetchHandler(this.fetch));

    return httpHandler;
  }

  public patch<T>(url: string, urlParameterMap?: object, body?: object): Promise<T> {
    return this.request(this.PATCH, url, urlParameterMap, body);
  }

  public post<T>(url: string, urlParameterMap?: object, body?: object): Promise<T> {
    return this.request(this.POST, url, urlParameterMap, body);
  }

  public get<T>(url: string, urlParameterMap?: object, queryStringParameters?: object): Promise<T> {
    return this.request(this.GET, url, urlParameterMap, undefined, queryStringParameters);
  }

  public delete<T>(url: string, urlParameterMap?: object): Promise<T> {
    return this.request(this.DELETE, url, urlParameterMap);
  }

  public put<T>(url: string, urlParameterMap?: object, body?: object): Promise<T> {
    return this.request(this.PUT, url, urlParameterMap, body);
  }

  private async request<T>(method: string, url: string, urlParameterMap?: object, body?: any, queryStringParameters?: object): Promise<any> {
    const requestUrl = prepareUrl(this.baseUrl, url, urlParameterMap, queryStringParameters);

    body = copyAndPrepareBody(body);

    const request = {
      method: method,
      url: requestUrl.toString(),
      body: JSON.stringify(body),
      headers: {}
    };

    const response = await this.httpHandler.executeRequest(request);
    const bodyResponse = await response.text();
    if (bodyResponse.length === 0) {
      return undefined;
    }

    try {
      const jsonResponse = JSON.parse(bodyResponse);
      if (jsonResponse.data && jsonResponse.data.result) {
        return jsonResponse.data.result;
      }

      return undefined;
    } catch (error) {
      throw buildBitmovinError("Response body could not be parsed to JSON", request, response, bodyResponse, error);
    }
  }
}

interface HttpHandler {
  executeRequest(request: any): Promise<any>;
}

abstract class DelegatingHandler implements HttpHandler {
  public innerHandler?: HttpHandler;

  abstract executeRequest(request: any): Promise<any>;
}

class HeaderHandler extends DelegatingHandler {
  private headers: Record<string, string>;

  constructor(apiKey: string, tenantOrgId: string | undefined, additionalHeaders: Record<string, string> | undefined) {
    super();

    const headers: Record<string, string> = {
      'X-Api-Key': apiKey,
      'X-Api-Client': 'bitmovin-api-sdk-javascript',
      'X-Api-Client-Version': '1.177.0',
      'Content-Type': 'application/json'
    };

    if (tenantOrgId) {
      headers['X-Tenant-Org-Id'] = tenantOrgId;
    }

    this.headers = Object.assign(headers, additionalHeaders);
  }

  async executeRequest(request: any): Promise<any> {
    request.headers = Object.assign(request.headers, this.headers);

    return await this.innerHandler!.executeRequest(request);
  }
}

class LoggingHandler extends DelegatingHandler {
  private logger: Logger;

  constructor(logger: Logger) {
    super();

    this.logger = logger;
  }

  async executeRequest(request: any): Promise<any> {
    await this.logger.logRequest(request);

    const response = await this.innerHandler!.executeRequest(request);

    await this.logger.logResponse(response);

    return response;
  }
}

class ErrorHandler extends DelegatingHandler {
  async executeRequest(request: any): Promise<any> {
    let response;
    try {
      response = await this.innerHandler!.executeRequest(request);
      if (response.status >= 200 && response.status <= 299) {
        return response;
      }
    } catch (error) {
      throw buildBitmovinErrorFromError(request, error);
    }

    const bodyResponse = await response.text();
    if (bodyResponse.length === 0) {
      throw buildBitmovinError(`HTTP response code was ${response.status} ${response.statusText} (response body is empty)`, request, response, bodyResponse);
    }

    let jsonError;
    try {
      jsonError = JSON.parse(bodyResponse);
    } catch (error) {
      throw buildBitmovinError(`HTTP response code was ${response.status} ${response.statusText} (response body is invalid JSON)`, request, response, bodyResponse);
    }

    throw buildBitmovinError(`HTTP response code was ${response.status} ${response.statusText}`, request, response, jsonError);
  }
}

class FetchHandler implements HttpHandler {
  private readonly fetch: FetchAPI;

  constructor(fetch: FetchAPI) {
    this.fetch = fetch;
  }

  async executeRequest(request: any): Promise<any> {
    const { url, method, body, headers } = request;

    const response = await this.fetch!(url, { method, body, headers });

    // we always need the body, this way we can access it multiple times
    const bodyText = await response.text();
    response.text = () => new Promise<string>(resolve => resolve(bodyText));

    return response;
  }
}
