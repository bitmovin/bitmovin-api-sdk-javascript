import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';
import EmailNotification from './EmailNotification';

/**
 * @export
 * @class EmailNotificationWithStreamConditions
 */
export class EmailNotificationWithStreamConditions extends EmailNotification {
  constructor(obj: any) {
    super(obj);
    this.conditions = map<AbstractCondition>(obj.conditions, AbstractCondition);
  }

  /**
   * @type {Array<AbstractCondition>}
   * @memberof EmailNotificationWithStreamConditions
   */
  public conditions?: Array<AbstractCondition>;
}

export default EmailNotificationWithStreamConditions;

