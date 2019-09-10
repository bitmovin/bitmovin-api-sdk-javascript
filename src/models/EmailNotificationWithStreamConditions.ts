import {map, mapArray} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import EmailNotification from './EmailNotification';

/**
 * @export
 * @class EmailNotificationWithStreamConditions
 */
export class EmailNotificationWithStreamConditions extends EmailNotification {
  /**
   * @type {AbstractCondition}
   * @memberof EmailNotificationWithStreamConditions
   */
  public conditions?: AbstractCondition;

  constructor(obj?: Partial<EmailNotificationWithStreamConditions>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.conditions = map(obj.conditions, AbstractCondition);
  }
}

export default EmailNotificationWithStreamConditions;

