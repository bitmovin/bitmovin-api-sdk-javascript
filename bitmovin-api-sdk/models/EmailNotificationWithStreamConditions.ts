import {map} from '../common/Mapper';
import EmailNotification from './EmailNotification';
import StreamCondition from './StreamCondition';

/**
 * @export
 * @class EmailNotificationWithStreamConditions
 */
export default class EmailNotificationWithStreamConditions extends EmailNotification {
  constructor(obj: any) {
    super(obj);
    this.conditions = map<StreamCondition>(obj.conditions, StreamCondition);
  }

  /**
   * @type {Array<StreamCondition>}
   * @memberof EmailNotificationWithStreamConditions
   */
  public conditions?: Array<StreamCondition>;
}
