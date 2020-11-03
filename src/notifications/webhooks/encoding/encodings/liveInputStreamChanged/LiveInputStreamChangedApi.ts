import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import WebhookNotificationWithStreamConditions from '../../../../../models/WebhookNotificationWithStreamConditions';
import WebhookNotificationWithStreamConditionsRequest from '../../../../../models/WebhookNotificationWithStreamConditionsRequest';

/**
 * LiveInputStreamChangedApi - object-oriented interface
 * @export
 * @class LiveInputStreamChangedApi
 * @extends {BaseAPI}
 */
export default class LiveInputStreamChangedApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Live Input Stream Changed Webhook Notification (All Encodings)
   * @param {WebhookNotificationWithStreamConditionsRequest} webhookNotificationWithStreamConditionsRequest The webhook notifications object
   * @throws {BitmovinError}
   * @memberof LiveInputStreamChangedApi
   */
  public create(webhookNotificationWithStreamConditionsRequest?: WebhookNotificationWithStreamConditionsRequest): Promise<WebhookNotificationWithStreamConditions> {
    return this.restClient.post<WebhookNotificationWithStreamConditions>('/notifications/webhooks/encoding/encodings/live-input-stream-changed', {}, webhookNotificationWithStreamConditionsRequest).then((response) => {
      return map(response, WebhookNotificationWithStreamConditions);
    });
  }

  /**
   * @summary Add Live Input Stream Changed Webhook Notification (Specific Encoding)
   * @param {string} encodingId Id of the encoding resource
   * @param {WebhookNotificationWithStreamConditionsRequest} webhookNotificationWithStreamConditionsRequest The webhook notifications object
   * @throws {BitmovinError}
   * @memberof LiveInputStreamChangedApi
   */
  public createByEncodingId(encodingId: string, webhookNotificationWithStreamConditionsRequest?: WebhookNotificationWithStreamConditionsRequest): Promise<WebhookNotificationWithStreamConditions> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<WebhookNotificationWithStreamConditions>('/notifications/webhooks/encoding/encodings/{encoding_id}/live-input-stream-changed', pathParamMap, webhookNotificationWithStreamConditionsRequest).then((response) => {
      return map(response, WebhookNotificationWithStreamConditions);
    });
  }

  /**
   * @summary Replace Live Input Stream Changed Webhook Notification
   * @param {string} notificationId Id of the webhook notification
   * @param {WebhookNotificationWithStreamConditionsRequest} webhookNotificationWithStreamConditionsRequest The webhook notification with the updated values
   * @throws {BitmovinError}
   * @memberof LiveInputStreamChangedApi
   */
  public update(notificationId: string, webhookNotificationWithStreamConditionsRequest?: WebhookNotificationWithStreamConditionsRequest): Promise<WebhookNotificationWithStreamConditions> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.put<WebhookNotificationWithStreamConditions>('/notifications/webhooks/encoding/encodings/live-input-stream-changed/{notification_id}', pathParamMap, webhookNotificationWithStreamConditionsRequest).then((response) => {
      return map(response, WebhookNotificationWithStreamConditions);
    });
  }
}
