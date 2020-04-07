import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import Webhook from '../../../../../models/Webhook';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {WebhookListQueryParams, WebhookListQueryParamsBuilder} from './WebhookListQueryParams';
import {WebhookListByEncodingIdQueryParams, WebhookListByEncodingIdQueryParamsBuilder} from './WebhookListByEncodingIdQueryParams';

/**
 * ErrorApi - object-oriented interface
 * @export
 * @class ErrorApi
 * @extends {BaseAPI}
 */
export default class ErrorApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Encoding Error Webhook
   * @param {Webhook} webhook The Encoding Error Webhook to be added. **Note:** A maximum number of 5 webhooks is allowed
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public create(webhook?: Webhook): Promise<Webhook> {
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/error', {}, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Add Encoding Error Webhook for specific Encoding Resource. **Note:** A maximum number of 5 webhooks is allowed
   * @param {string} encodingId Id of the encoding
   * @param {Webhook} webhook The Encoding Error Webhook to be added
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public createByEncodingId(encodingId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/error', pathParamMap, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Delete Encoding Error Webhook for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public deleteByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/{encoding_id}/error/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Delete Encoding Error Webhook
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public deleteByWebhookId(webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/error/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Encoding Error Webhook Details for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public getByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/error/{webhook_id}', pathParamMap).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Encoding Error Webhook Details
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public getByWebhookId(webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/error/{webhook_id}', pathParamMap).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary List Encoding Error Webhooks
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public list(queryParameters?: WebhookListQueryParams | ((q: WebhookListQueryParamsBuilder) => WebhookListQueryParamsBuilder)): Promise<PaginationResponse<Webhook>> {
    let queryParams: WebhookListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WebhookListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/error', {}, queryParams).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }

  /**
   * @summary List Encoding Error Webhooks for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public listByEncodingId(encodingId: string, queryParameters?: WebhookListByEncodingIdQueryParams | ((q: WebhookListByEncodingIdQueryParamsBuilder) => WebhookListByEncodingIdQueryParamsBuilder)): Promise<PaginationResponse<Webhook>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: WebhookListByEncodingIdQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WebhookListByEncodingIdQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/{encoding_id}/error', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }
}
