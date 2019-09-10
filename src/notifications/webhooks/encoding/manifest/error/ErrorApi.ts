import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
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
   * @summary Add Manifest Error Webhook (All Manifests)
   * @param {Webhook} webhook Add a new webhook notification if a manifest creation failed with an error
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public create(webhook?: Webhook): Promise<PaginationResponse<Webhook>> {
    return this.restClient.post<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/manifest/error', {}, webhook).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }

  /**
   * @summary Add Manifest Error Webhook Notification (Specific Manifest)
   * @param {string} manifestId Id of the manifest resource
   * @param {Webhook} webhook The webhook notifications object
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
   * @summary Replace Manifest Error Webhook Notification
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
