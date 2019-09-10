import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import Webhook from '../../../../../models/Webhook';
import PaginationResponse from '../../../../../models/PaginationResponse';

/**
 * FinishedApi - object-oriented interface
 * @export
 * @class FinishedApi
 * @extends {BaseAPI}
 */
export default class FinishedApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Manifest Finished Successfully Webhook (All Manifests)
   * @param {Webhook} webhook Add a new webhook notification if a manifest creation finished successfully
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public create(webhook?: Webhook): Promise<PaginationResponse<Webhook>> {
    return this.restClient.post<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/manifest/finished', {}, webhook).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }

  /**
   * @summary Add Manifest Finished Successfully Webhook Notification (Specific Manifest)
   * @param {string} manifestId Id of the manifest resource
   * @param {Webhook} webhook The webhook notifications object
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public createByManifestId(manifestId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/manifest/{manifest_id}/finished', pathParamMap, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Replace Manifest Finished Webhook Notification
   * @param {string} notificationId Id of the webhook notification
   * @param {Webhook} webhook The webhook notification with the updated values
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public update(notificationId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.put<Webhook>('/notifications/webhooks/encoding/manifest/finished/{notification_id}', pathParamMap, webhook).then((response) => {
      return map(response, Webhook);
    });
  }
}
