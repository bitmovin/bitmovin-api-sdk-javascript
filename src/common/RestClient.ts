import * as e6p from 'es6-promise';
import * as urljoin from 'url-join';
import * as isomorphicFetch from 'isomorphic-fetch';

import {RequiredError} from './BaseAPI';
import Configuration from './Configuration';
import Logger from './Logger';
import NullLogger from './NullLogger';
import {buildBitmovinError} from './BitmovinErrorBuilder';

(e6p as any).polyfill();

const BASE_URL = 'https://api.bitmovin.com/v1'.replace(/\/+$/, '');

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
        urlParameterMap[key] = urlParameterMap[key].toISOString();
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

  private request<T>(method: string, url: string, urlParameterMap?: object, body?: object, queryStringParameters?: object): Promise<T> {
    const requestUrl = prepareUrl(this.baseUrl, url, urlParameterMap, queryStringParameters);
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
        return response.json().then((json) => {
          if (response.status > 399) {
            this.logger.error(`HTTP request was unsuccessful: HTTP response code was ${response.status} ${response.statusText}`);
            throw buildBitmovinError(request, response, json);
          }
          return json;
        }, () => {
          if (response.status !== 204) {
            this.logger.error(`Response body was empty or could not be parsed`);
            throw buildBitmovinError(request, response);
          }
          return {data: {}};
        });
    }).then((responseJson) => {
      const result = responseJson.data.result;
      this.logger.log('Response body:', responseJson);
      return result;
    });
  }
}
