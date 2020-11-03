import {map, mapArray} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import WebhookNotification from './WebhookNotification';

/**
 * @export
 * @class WebhookNotificationWithStreamConditionsRequest
 */
export class WebhookNotificationWithStreamConditionsRequest extends WebhookNotification {
  /**
   * @type {AbstractCondition}
   * @memberof WebhookNotificationWithStreamConditionsRequest
   */
  public conditions?: AbstractCondition;

  constructor(obj?: Partial<WebhookNotificationWithStreamConditionsRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.conditions = map(obj.conditions, AbstractCondition);
  }
}

export default WebhookNotificationWithStreamConditionsRequest;

