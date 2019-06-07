import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import Webhook from '../../../../../models/Webhook';
import PaginationResponse from '../../../../../models/PaginationResponse';
import WebhookListQueryParams from './WebhookListQueryParams';
import WebhookListByEncodingIdQueryParams from './WebhookListByEncodingIdQueryParams';

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
   * @param {Webhook} webhook
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public create(webhook?: Webhook): Promise<Webhook> {
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/error', {}, webhook).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary Add Encoding Error Webhook for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {Webhook} webhook
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public createbyEncodingId(encodingId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/error', pathParamMap, webhook).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary Delete Encoding Error Webhook for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public deleteByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/{encoding_id}/error/{webhook_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Delete Encoding Error Webhook
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public deleteByWebhookId(webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/error/{webhook_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Encoding Error Webhook Details for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public getByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/error/{webhook_id}', pathParamMap).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary Encoding Error Webhook Details
   * @param {string} webhookId Id of the webhook
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public getByWebhookId(webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/error/{webhook_id}', pathParamMap).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary List Encoding Error Webhooks
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public list(queryParams?: WebhookListQueryParams): Promise<PaginationResponse<Webhook>> {
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/error', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Webhook>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Webhook(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary List Encoding Error Webhooks for specific Encoding Resource
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ErrorApi
   */
  public listByEncodingId(encodingId: string, queryParams?: WebhookListByEncodingIdQueryParams): Promise<PaginationResponse<Webhook>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/{encoding_id}/error', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Webhook>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Webhook(i));
      }
      return paginationResponse;
    });
  }
}
