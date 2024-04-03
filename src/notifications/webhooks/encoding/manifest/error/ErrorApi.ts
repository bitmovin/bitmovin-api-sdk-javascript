import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import Webhook from '../../../../../models/Webhook';
import PaginationResponse from '../../../../../models/PaginationResponse';

/**
 * ErrorApi - object-oriented interface
 * @export
 * @class ErrorApi
 * @extends {BaseAPI}
 */
export default class ErrorApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add 'Manifest Error' Webhook (All Manifests)
   * @param {Webhook} webhook The &#39;Manifest Error&#39; Webhook to be added.
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public create(webhook?: Webhook): Promise<Webhook> {
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/manifest/error', {}, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Add 'Manifest Error' Webhook Notification (Specific Manifest)
   * @param {string} manifestId Id of the manifest resource
   * @param {Webhook} webhook The webhook notifications object. A maximum number of 5 webhooks per Manifest is allowed
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public createByManifestId(manifestId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/manifest/{manifest_id}/error', pathParamMap, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Delete 'Manifest Error' Webhook
   * @param {string} notificationId Id of the webhook notification
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public delete(notificationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/manifest/error/{notification_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get 'Manifest Error' Webhooks (All Manifests)
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public list(): Promise<PaginationResponse<Webhook>> {
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/manifest/error', {}).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }

  /**
   * @summary Replace 'Manifest Error' Webhook Notification
   * @param {string} notificationId Id of the webhook notification
   * @param {Webhook} webhook The webhook notification with the updated values
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public update(notificationId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.put<Webhook>('/notifications/webhooks/encoding/manifest/error/{notification_id}', pathParamMap, webhook).then((response) => {
      return map(response, Webhook);
    });
  }
}
