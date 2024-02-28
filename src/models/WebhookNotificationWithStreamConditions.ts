import {map, mapArray} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import WebhookHttpMethod from './WebhookHttpMethod';
import WebhookNotification from './WebhookNotification';
import WebhookSignature from './WebhookSignature';

/**
 * @export
 * @class WebhookNotificationWithStreamConditions
 */
export class WebhookNotificationWithStreamConditions extends WebhookNotification {
  /**
   * @type {AbstractCondition}
   * @memberof WebhookNotificationWithStreamConditions
   */
  public conditions?: AbstractCondition;

  constructor(obj?: Partial<WebhookNotificationWithStreamConditions>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.conditions = map(obj.conditions, AbstractCondition);
  }
}

export default WebhookNotificationWithStreamConditions;

