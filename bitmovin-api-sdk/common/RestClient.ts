import * as e6p from 'es6-promise';
import * as urljoin from 'url-join';
import * as isomorphicFetch from 'isomorphic-fetch';

import BitmovinError from './BitmovinError';
import {RequiredError} from './BaseAPI';
import Configuration from './Configuration';
import Logger from './Logger';
import NullLogger from './NullLogger';

(e6p as any).polyfill();

const BASE_URL = 'https://api.bitmovin.com/v1'.replace(/\/+$/, '');

export type FetchAPI = (url: string, init?: any) => Promise<Response>;

function getHeaders(apiKey: string, tenantOrgId?: string) {
  const headers: any = {
    'X-Api-Key': apiKey,
    'X-Api-Client': 'bitmovin-api-sdk-javascript',
    'X-Api-Client-Version': '1.14.0-alpha.0',
    'Content-Type': 'application/json'
  };

  if (tenantOrgId) {
    headers['X-Tenant-Org-Id'] = tenantOrgId;
  }

  return headers;
}

function queryParams(params) {
  if (!params) {
    return '';
  }

  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

function prepareUrl(baseUrl: string, url: string, urlParameterMap: any, queryStringParameters: any): URL {
  let modifiedUrl = url;

  if (urlParameterMap) {
    for (const key in urlParameterMap) {
      if (urlParameterMap.hasOwnProperty(key)) {

        // Convert to ISO string if the parameter is a Date
        if (urlParameterMap[key] instanceof Date) {
          urlParameterMap[key] = urlParameterMap[key].toISOString();
        }

        modifiedUrl = modifiedUrl.replace(new RegExp(`{${key}}`), urlParameterMap[key]);
      }
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

  private request<T>(method: string, url: string, urlParameterMap?: object, body?: object, queryStringParameters?: object): Promise<T> {
    const requestUrl = prepareUrl(this.baseUrl, url, urlParameterMap, queryStringParameters);

    this.logger.log(`Request: ${method} ${url} ...`);
    if (body) {
      this.logger.log('Request Body:', body);
    }

    return this.fetch!(requestUrl.toString(), {
      method: method,
      body: JSON.stringify(body),
      headers: getHeaders(this.apiKey, this.tenantOrgId)
    }).then((response) => {
      if (response.status > 399) {
        const errorMessage =
          `HTTP Request was unsuccessful: HTTP Response Code was ${response.status} ${response.statusText}`;

        this.logger.error(errorMessage);

        return response.json().then(responseData => {
          this.logger.error('Error Response Body:', responseData);
          throw new BitmovinError(errorMessage, {
            ok: response.ok,
            statusText: response.statusText,
            redirected: response.redirected,
            type: response.type,
            status: response.status,
            headers: response.headers,
            responseData
          });
        });
      }

      // Empty content
      if (response.status === 204) {
        this.logger.log('Response: 204 - No Content');
        return {data: {}};
      }

      return response.json();
    }).then((responseJson) => {
      const result = responseJson.data.result;
      this.logger.log('Response body:', responseJson);
      return result;
    });
  }
}
