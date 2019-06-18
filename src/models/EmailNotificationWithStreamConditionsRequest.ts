import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';

/**
 * @export
 * @class EmailNotificationWithStreamConditionsRequest
 */
export class EmailNotificationWithStreamConditionsRequest {
  constructor(obj: any) {
    this.resolve = map(obj.resolve);
    this.emails = map(obj.emails);
    this.muted = map(obj.muted);
    this.conditions = map<AbstractCondition>(obj.conditions, AbstractCondition);
  }

  /**
   * Notify when condition resolves after it was met
   * @type {boolean}
   * @memberof EmailNotificationWithStreamConditionsRequest
   */
  public resolve?: boolean;
  /**
   * @type {Array<string>}
   * @memberof EmailNotificationWithStreamConditionsRequest
   */
  public emails: Array<string>;
  /**
   * @type {boolean}
   * @memberof EmailNotificationWithStreamConditionsRequest
   */
  public muted?: boolean;
  /**
   * @type {AbstractCondition}
   * @memberof EmailNotificationWithStreamConditionsRequest
   */
  public conditions?: AbstractCondition;
}

export default EmailNotificationWithStreamConditionsRequest;

