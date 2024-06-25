import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import LiveEncodingHeartbeatWebhook from '../../../../../models/LiveEncodingHeartbeatWebhook';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {LiveEncodingHeartbeatWebhookListQueryParams, LiveEncodingHeartbeatWebhookListQueryParamsBuilder} from './LiveEncodingHeartbeatWebhookListQueryParams';

/**
 * LiveEncodingHeartbeatApi - object-oriented interface
 * @export
 * @class LiveEncodingHeartbeatApi
 * @extends {BaseAPI}
 */
export default class LiveEncodingHeartbeatApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add 'Live Encoding Heartbeat' Webhook
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
   * @summary 'Live Encoding Heartbeat' Webhook Details
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
}
