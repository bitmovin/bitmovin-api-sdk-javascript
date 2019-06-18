import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import EmailNotificationWithStreamConditions from '../../../../../models/EmailNotificationWithStreamConditions';
import EmailNotificationWithStreamConditionsRequest from '../../../../../models/EmailNotificationWithStreamConditionsRequest';

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
   * @summary Add Live Input Stream Changed Email Notification (All Encodings)
   * @param {EmailNotificationWithStreamConditionsRequest} emailNotificationWithStreamConditionsRequest The email notifications object
   * @throws {RequiredError}
   * @memberof LiveInputStreamChangedApi
   */
  public create(emailNotificationWithStreamConditionsRequest?: EmailNotificationWithStreamConditionsRequest): Promise<EmailNotificationWithStreamConditions> {
    return this.restClient.post<EmailNotificationWithStreamConditions>('/notifications/emails/encoding/encodings/live-input-stream-changed', {}, emailNotificationWithStreamConditionsRequest).then((response) => {
      return new EmailNotificationWithStreamConditions(response);
    });
  }

  /**
   * @summary Add Live Input Stream Changed Email Notification (Specific Encoding)
   * @param {string} encodingId Id of the encoding resource
   * @param {EmailNotificationWithStreamConditionsRequest} emailNotificationWithStreamConditionsRequest The email notifications object
   * @throws {RequiredError}
   * @memberof LiveInputStreamChangedApi
   */
  public createByEncodingId(encodingId: string, emailNotificationWithStreamConditionsRequest?: EmailNotificationWithStreamConditionsRequest): Promise<EmailNotificationWithStreamConditions> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<EmailNotificationWithStreamConditions>('/notifications/emails/encoding/encodings/{encoding_id}/live-input-stream-changed', pathParamMap, emailNotificationWithStreamConditionsRequest).then((response) => {
      return new EmailNotificationWithStreamConditions(response);
    });
  }

  /**
   * @summary Replace Live Input Stream Changed Email Notification
   * @param {string} notificationId Id of the email notification
   * @param {EmailNotificationWithStreamConditionsRequest} emailNotificationWithStreamConditionsRequest The email notification with the updated values
   * @throws {RequiredError}
   * @memberof LiveInputStreamChangedApi
   */
  public update(notificationId: string, emailNotificationWithStreamConditionsRequest?: EmailNotificationWithStreamConditionsRequest): Promise<EmailNotificationWithStreamConditions> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.put<EmailNotificationWithStreamConditions>('/notifications/emails/encoding/encodings/live-input-stream-changed/{notification_id}', pathParamMap, emailNotificationWithStreamConditionsRequest).then((response) => {
      return new EmailNotificationWithStreamConditions(response);
    });
  }
}
