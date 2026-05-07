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
 * LiveManifestReadyApi - object-oriented interface
 * @export
 * @class LiveManifestReadyApi
 * @extends {BaseAPI}
 */
export default class LiveManifestReadyApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add 'Live Manifest Ready' Webhook
   * @param {Webhook} webhook The &#39;Live Manifest Ready&#39; Webhook to be added.
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
   */
  public create(webhook?: Webhook): Promise<Webhook> {
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/live-manifest-ready', {}, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Add 'Live Manifest Ready' Webhook for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {Webhook} webhook The &#39;Live Manifest Ready&#39; Webhook to be added.
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
   */
  public createByEncodingId(encodingId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-manifest-ready', pathParamMap, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Delete 'Live Manifest Ready' Webhook for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
   */
  public deleteByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-manifest-ready/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Delete 'Live Manifest Ready' Webhook
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
   */
  public deleteByWebhookId(webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/live-manifest-ready/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary 'Live Manifest Ready' Webhook Details for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
   */
  public getByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-manifest-ready/{webhook_id}', pathParamMap).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary 'Live Manifest Ready' Webhook Details
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
   */
  public getByWebhookId(webhookId: string): Promise<Webhook> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.get<Webhook>('/notifications/webhooks/encoding/encodings/live-manifest-ready/{webhook_id}', pathParamMap).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary List 'Live Manifest Ready' Webhooks
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
   */
  public list(queryParameters?: WebhookListQueryParams | ((q: WebhookListQueryParamsBuilder) => WebhookListQueryParamsBuilder)): Promise<PaginationResponse<Webhook>> {
    let queryParams: WebhookListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WebhookListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/live-manifest-ready', {}, queryParams).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }

  /**
   * @summary List 'Live Manifest Ready' Webhooks for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LiveManifestReadyApi
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
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-manifest-ready', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }
}
