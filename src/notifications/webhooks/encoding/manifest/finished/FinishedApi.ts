import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
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
   * @summary Create 'Manifest Finished' Webhook
   * @param {Webhook} webhook Add a new webhook notification that triggers if a manifest generation finished successfully. A maximum number of 5 webhooks is allowed
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public create(webhook?: Webhook): Promise<Webhook> {
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/manifest/finished', {}, webhook).then((response) => {
      return map(response, Webhook);
    });
  }

  /**
   * @summary Create 'Manifest Finished' Webhook for a specific Manifest
   * @param {string} manifestId Id of the manifest resource
   * @param {Webhook} webhook The webhook notifications object. A maximum number of 5 webhooks per Manifest is allowed
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
   * @summary Delete 'Manifest Finished' Webhook
   * @param {string} notificationId Id of the webhook notification
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public delete(notificationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/manifest/finished/{notification_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary List 'Manifest Finished' Webhooks
   * @throws {BitmovinError}
   * @memberof FinishedApi
   */
  public list(): Promise<PaginationResponse<Webhook>> {
    return this.restClient.get<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/manifest/finished', {}).then((response) => {
      return new PaginationResponse<Webhook>(response, Webhook);
    });
  }

  /**
   * @summary Update 'Manifest Finished' Webhook
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
