import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import Webhook from '../../../../../models/Webhook';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {WebhookListQueryParams, WebhookListQueryParamsBuilder} from './WebhookListQueryParams';
import {WebhookListByEncodingIdQueryParams, WebhookListByEncodingIdQueryParamsBuilder} from './WebhookListByEncodingIdQueryParams';
import {getType, map} from '../../../../../common/Mapper';

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
   * @summary Add Encoding Finished Webhook
   * @param {Webhook} webhook The Encoding Finished Webhook to be added
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public create(webhook?: Webhook): Promise<Webhook> {
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/finished', {}, webhook).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary Add Encoding Finished Webhook for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {Webhook} webhook The Encoding Finished Webhook to be added
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public createByEncodingId(encodingId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished', pathParamMap, webhook).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary Delete Encoding Finished Webhook for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public deleteByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished/{webhook_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Delete Encoding Finished Webhook
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public deleteByWebhookId(webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/finished/{webhook_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Encoding Finished Webhook Details for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public getByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/finished/{webhook_id}', pathParamMap).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary Encoding Finished Webhook Details
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public getByWebhookId(webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/finished/{webhook_id}', pathParamMap).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary List Encoding Finished Webhooks
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
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
      const paginationResponse = new PaginationResponse<Webhook>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Webhook(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary List Encoding Finished Webhooks for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
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
      const paginationResponse = new PaginationResponse<Webhook>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Webhook(i));
      }
      return paginationResponse;
    });
  }
}
