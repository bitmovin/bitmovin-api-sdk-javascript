import * as e6p from 'es6-promise';
import * as urljoin from 'url-join';
import * as isomorphicFetch from 'isomorphic-fetch';

import { RequiredError } from './BaseAPI';
import Configuration from './Configuration';
import Logger from './Logger';
import NullLogger from './NullLogger';
import { buildBitmovinError } from './BitmovinErrorBuilder';
import BitmovinError from './BitmovinError';

(e6p as any).polyfill();

const BASE_URL = 'https://api.bitmovin.com/v1';

export type FetchAPI = (url: string, init?: any) => Promise<Response>;

function queryParams(params) {
  if (!params) {
    return '';
  }

  let queryParameterString = '';
  let addSeperator = false;

  for (const key of Object.keys(params)) {
    if (params[key] && typeof params[key] !== 'function') {
      queryParameterString += (addSeperator ? '&' : '') + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      addSeperator = true;
    }
  }

  return queryParameterString;
}

function prepareUrl(baseUrl: string, url: string, urlParameterMap: any, queryStringParameters: any): URL {
  let modifiedUrl = url;

  if (urlParameterMap) {
    for (const key of Object.keys(urlParameterMap)) {
      // Convert to ISO string if the parameter is a Date
      if (urlParameterMap[key] instanceof Date) {
        urlParameterMap[key] = (urlParameterMap[key] as Date).toISOString().slice(0, 10);
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
  private readonly POST = 'POST';
  private readonly PUT = 'PUT';
  private readonly DELETE = 'DELETE';

  private readonly apiKey: string;
  private readonly tenantOrgId?: string;
  private readonly baseUrl: string;
  private readonly fetch: FetchAPI;
  private readonly logger: Logger;
  private readonly headers?: Record<string, string>;

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

  private getHeaders(): any {
    let headers: Record<string, string> = {
      'X-Api-Key': this.apiKey,
      'X-Api-Client': 'bitmovin-api-sdk-javascript',
      'X-Api-Client-Version': '1.12.0-alpha.1',
      'Content-Type': 'application/json'
    };

    if (this.tenantOrgId) {
      headers['X-Tenant-Org-Id'] = this.tenantOrgId;
    }

    headers = Object.assign(headers, this.headers);

    return headers;
  }

  private request<T>(method: string, url: string, urlParameterMap?: object, body?: any, queryStringParameters?: object): Promise<T> {
    const requestUrl = prepareUrl(this.baseUrl, url, urlParameterMap, queryStringParameters);

    body = copyAndPrepareBody(body);

    const request = {
      method: method,
      url: requestUrl.toString(),
      body: JSON.stringify(body),
      headers: this.getHeaders()
    };

    this.logger.log(`Request: ${method} ${url} ...`);
    if (body) {
      this.logger.log('Request Body:', body);
    }

    return this.fetch!(request.url, {
      method: request.method,
      body: request.body,
      headers: request.headers
    }).then((response) => {
      return response.text().then((text) => {
        if (text.length === 0) {
          if (response.status > 399) {
            this.logger.error(`Response body was empty or could not be parsed`);
            throw buildBitmovinError(request, response);
          }
          return { data: {} };
        }
        try {
          const json = JSON.parse(text);
          if (response.status > 399) {
            this.logger.error(`HTTP request was unsuccessful: HTTP response code was ${response.status} ${response.statusText}`);
            throw buildBitmovinError(request, response, json);
          }
          return json;
        } catch (e) {
          if (e instanceof BitmovinError) {
            throw e;
          }

          if (response.status !== 204) {
            this.logger.error(`Response body was empty or could not be parsed`);
            throw buildBitmovinError(request, response);
          }
          return { data: {} };
        }
      }, () => {
        if (response.status !== 204) {
          this.logger.error(`Response body was empty or could not be parsed`);
          throw buildBitmovinError(request, response);
        }
        return { data: {} };
      });
    }).then((responseJson) => {
      const result = responseJson.data.result;
      this.logger.log('Response body:', responseJson);
      return result;
    });
  }
}
