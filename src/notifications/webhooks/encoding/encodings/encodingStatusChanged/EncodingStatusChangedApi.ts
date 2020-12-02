import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import WebhookNotificationWithStreamConditions from '../../../../../models/WebhookNotificationWithStreamConditions';
import WebhookNotificationWithStreamConditionsRequest from '../../../../../models/WebhookNotificationWithStreamConditionsRequest';

/**
 * EncodingStatusChangedApi - object-oriented interface
 * @export
 * @class EncodingStatusChangedApi
 * @extends {BaseAPI}
 */
export default class EncodingStatusChangedApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Encoding Changed Webhook Notification (All Encodings)
   * @param {WebhookNotificationWithStreamConditionsRequest} webhookNotificationWithStreamConditionsRequest The webhook notifications object. For conditions, following attributes are possible: &#39;type&#39;: &#39;Input file download&#39;, &#39;Input file analysis&#39;, &#39;Per-Title analysis&#39;, &#39;Encoding&#39;, &#39;Progressive Muxing&#39; &#39;progress&#39;: number in range of 0-100 &#39;status&#39;: &#39;RUNNING&#39;, &#39;FINISHED&#39;, &#39;ERROR&#39; Examples: To only get notified about the encoding process, create a Condition object and set attribute&#x3D;&#39;type&#39;, value&#x3D;&#39;Encoding&#39;, operator&#x3D;EQUAL To only get notified if a workflow step is finished, create a Condition object and set attribute&#x3D;&#39;status&#39;, value&#x3D;&#39;FINISHED&#39;, operator&#x3D;EQUAL To only get notified if a workflow step is over 50%,  create a Condition object and set attribute&#x3D;&#39;progress&#39;, value&#x3D;&#39;50&#39;, operator&#x3D;GREATER_THAN
   * @throws {BitmovinError}
   * @memberof EncodingStatusChangedApi
   */
  public create(webhookNotificationWithStreamConditionsRequest?: WebhookNotificationWithStreamConditionsRequest): Promise<WebhookNotificationWithStreamConditions> {
    return this.restClient.post<WebhookNotificationWithStreamConditions>('/notifications/webhooks/encoding/encodings/encoding-status-changed', {}, webhookNotificationWithStreamConditionsRequest).then((response) => {
      return map(response, WebhookNotificationWithStreamConditions);
    });
  }

  /**
   * @summary Add Encoding Changed Webhook Notification (Specific Encoding)
   * @param {string} encodingId Id of the encoding resource
   * @param {WebhookNotificationWithStreamConditionsRequest} webhookNotificationWithStreamConditionsRequest The webhook notifications object. For conditions, following attributes are possible: &#39;type&#39;: &#39;Input file download&#39;, &#39;Input file analysis&#39;, &#39;Per-Title analysis&#39;, &#39;Encoding&#39;, &#39;Progressive Muxing&#39; &#39;progress&#39;: number in range of 0-100 &#39;status&#39;: &#39;RUNNING&#39;, &#39;FINISHED&#39;, &#39;ERROR&#39; Examples: To only get notified about the encoding process, create a Condition object and set attribute&#x3D;&#39;type&#39;, value&#x3D;&#39;Encoding&#39;, operator&#x3D;EQUAL To only get notified if a workflow step is finished, create a Condition object and set attribute&#x3D;&#39;status&#39;, value&#x3D;&#39;FINISHED&#39;, operator&#x3D;EQUAL To only get notified if a workflow step is over 50%,  create a Condition object and set attribute&#x3D;&#39;progress&#39;, value&#x3D;&#39;50&#39;, operator&#x3D;GREATER_THAN 
   * @throws {BitmovinError}
   * @memberof EncodingStatusChangedApi
   */
  public createByEncodingId(encodingId: string, webhookNotificationWithStreamConditionsRequest?: WebhookNotificationWithStreamConditionsRequest): Promise<WebhookNotificationWithStreamConditions> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<WebhookNotificationWithStreamConditions>('/notifications/webhooks/encoding/encodings/{encoding_id}/encoding-status-changed', pathParamMap, webhookNotificationWithStreamConditionsRequest).then((response) => {
      return map(response, WebhookNotificationWithStreamConditions);
    });
  }

  /**
   * @summary Delete Encoding Status Changed Webhook
   * @param {string} notificationId Id of the webhook
   * @throws {BitmovinError}
   * @memberof EncodingStatusChangedApi
   */
  public deleteByWebhookId(notificationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/webhooks/encoding/encodings/encoding-status-changed/{notification_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Replace Encoding Status Changed Webhook Notification
   * @param {string} notificationId Id of the webhook notification
   * @param {WebhookNotificationWithStreamConditionsRequest} webhookNotificationWithStreamConditionsRequest The webhook notification with the updated values
   * @throws {BitmovinError}
   * @memberof EncodingStatusChangedApi
   */
  public update(notificationId: string, webhookNotificationWithStreamConditionsRequest?: WebhookNotificationWithStreamConditionsRequest): Promise<WebhookNotificationWithStreamConditions> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.put<WebhookNotificationWithStreamConditions>('/notifications/webhooks/encoding/encodings/encoding-status-changed/{notification_id}', pathParamMap, webhookNotificationWithStreamConditionsRequest).then((response) => {
      return map(response, WebhookNotificationWithStreamConditions);
    });
  }
}
