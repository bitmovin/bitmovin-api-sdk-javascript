import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import LiveEncodingHeartbeatWebhook from '../../../../../models/LiveEncodingHeartbeatWebhook';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {LiveEncodingHeartbeatWebhookListQueryParams, LiveEncodingHeartbeatWebhookListQueryParamsBuilder} from './LiveEncodingHeartbeatWebhookListQueryParams';
import {LiveEncodingHeartbeatWebhookListByEncodingIdQueryParams, LiveEncodingHeartbeatWebhookListByEncodingIdQueryParamsBuilder} from './LiveEncodingHeartbeatWebhookListByEncodingIdQueryParams';

/**
 * LiveEncodingHeartbeatApi - object-oriented interface
 * @export
 * @class LiveEncodingHeartbeatApi
 * @extends {BaseAPI}
 */
export default class LiveEncodingHeartbeatApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create 'Live Encoding Heartbeat' Webhook
   * @param {LiveEncodingHeartbeatWebhook} liveEncodingHeartbeatWebhook The &#39;Live Encoding Heartbeat&#39; Webhook to be added.
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public create(liveEncodingHeartbeatWebhook?: LiveEncodingHeartbeatWebhook): Promise<LiveEncodingHeartbeatWebhook> {
    return this.restClient.post<LiveEncodingHeartbeatWebhook>('/notifications/webhooks/encoding/encodings/live-encoding-heartbeat', {}, liveEncodingHeartbeatWebhook).then((response) => {
      return map(response, LiveEncodingHeartbeatWebhook);
    });
  }

  /**
   * @summary Create 'Live Encoding Heartbeat' Webhook for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {LiveEncodingHeartbeatWebhook} liveEncodingHeartbeatWebhook The &#39;Live Encoding Heartbeat&#39; Webhook to be added.
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public createByEncodingId(encodingId: string, liveEncodingHeartbeatWebhook?: LiveEncodingHeartbeatWebhook): Promise<LiveEncodingHeartbeatWebhook> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<LiveEncodingHeartbeatWebhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-encoding-heartbeat', pathParamMap, liveEncodingHeartbeatWebhook).then((response) => {
      return map(response, LiveEncodingHeartbeatWebhook);
    });
  }

  /**
   * @summary Delete 'Live Encoding Heartbeat' Webhook for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public deleteByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-encoding-heartbeat/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Delete 'Live Encoding Heartbeat' Webhook
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public deleteByWebhookId(webhookId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/live-encoding-heartbeat/{webhook_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get 'Live Encoding Heartbeat' Webhook details for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public getByEncodingIdAndWebhookId(encodingId: string, webhookId: string): Promise<LiveEncodingHeartbeatWebhook> {
    const pathParamMap = {
      encoding_id: encodingId,
      webhook_id: webhookId
    };
    return this.restClient.get<LiveEncodingHeartbeatWebhook>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-encoding-heartbeat/{webhook_id}', pathParamMap).then((response) => {
      return map(response, LiveEncodingHeartbeatWebhook);
    });
  }

  /**
   * @summary Get 'Live Encoding Heartbeat' Webhook details
   * @param {string} webhookId Id of the webhook
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public getByWebhookId(webhookId: string): Promise<LiveEncodingHeartbeatWebhook> {
    const pathParamMap = {
      webhook_id: webhookId
    };
    return this.restClient.get<LiveEncodingHeartbeatWebhook>('/notifications/webhooks/encoding/encodings/live-encoding-heartbeat/{webhook_id}', pathParamMap).then((response) => {
      return map(response, LiveEncodingHeartbeatWebhook);
    });
  }

  /**
   * @summary List 'Live Encoding Heartbeat' Webhooks
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public list(queryParameters?: LiveEncodingHeartbeatWebhookListQueryParams | ((q: LiveEncodingHeartbeatWebhookListQueryParamsBuilder) => LiveEncodingHeartbeatWebhookListQueryParamsBuilder)): Promise<PaginationResponse<LiveEncodingHeartbeatWebhook>> {
    let queryParams: LiveEncodingHeartbeatWebhookListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LiveEncodingHeartbeatWebhookListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LiveEncodingHeartbeatWebhook>>('/notifications/webhooks/encoding/encodings/live-encoding-heartbeat', {}, queryParams).then((response) => {
      return new PaginationResponse<LiveEncodingHeartbeatWebhook>(response, LiveEncodingHeartbeatWebhook);
    });
  }

  /**
   * @summary List 'Live Encoding Heartbeat' Webhooks for a specific Encoding
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LiveEncodingHeartbeatApi
   */
  public listByEncodingId(encodingId: string, queryParameters?: LiveEncodingHeartbeatWebhookListByEncodingIdQueryParams | ((q: LiveEncodingHeartbeatWebhookListByEncodingIdQueryParamsBuilder) => LiveEncodingHeartbeatWebhookListByEncodingIdQueryParamsBuilder)): Promise<PaginationResponse<LiveEncodingHeartbeatWebhook>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: LiveEncodingHeartbeatWebhookListByEncodingIdQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LiveEncodingHeartbeatWebhookListByEncodingIdQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LiveEncodingHeartbeatWebhook>>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-encoding-heartbeat', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<LiveEncodingHeartbeatWebhook>(response, LiveEncodingHeartbeatWebhook);
    });
  }
}
