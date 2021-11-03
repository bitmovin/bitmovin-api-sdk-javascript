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
 * FinishedApi - object-oriented interface
 * @export
 * @class FinishedApi
 * @extends {BaseAPI}
 */
export default class FinishedApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add 'Encoding Finished' Webhook
   * @param {Webhook} webhook The &#39;Encoding Finished&#39; Webhook to be added. A maximum number of 5 webhooks is allowed
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public create(webhook?: Webhook): Promise<Webhook> {
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/finished', {}, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Add 'Encoding Finished' Webhook for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {Webhook} webhook The &#39;Encoding Finished&#39; Webhook to be added. A maximum number of 5 webhooks per Encoding is allowed
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public createByEncodingId(encodingId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished', pathParamMap, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Delete 'Encoding Finished' Webhook for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public deleteByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Delete 'Encoding Finished' Webhook
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public deleteByWebhookId(webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/finished/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary 'Encoding Finished' Webhook Details for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public getByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished/{webhook_id}', pathParamMap).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary 'Encoding Finished' Webhook Details
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public getByWebhookId(webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/finished/{webhook_id}', pathParamMap).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary List 'Encoding Finished' Webhooks
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public list(queryParameters?: WebhookListQueryParams | ((q: WebhookListQueryParamsBuilder) => WebhookListQueryParamsBuilder)): Promise<PaginationResponse<Webhook>> {
    let queryParams: WebhookListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WebhookListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/finished', {}, queryParams).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }

  /**
   * @summary List 'Encoding Finished' Webhooks for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FinishedApi
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
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }
}
