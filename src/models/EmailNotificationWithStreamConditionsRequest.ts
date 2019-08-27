import {map} from '../common/Mapper';
import AbstractCondition from './AbstractCondition';

/**
 * @export
 * @class EmailNotificationWithStreamConditionsRequest
 */
export class EmailNotificationWithStreamConditionsRequest {
  /**
   * Notify when condition resolves after it was met
   * @type {boolean}
   * @memberof EmailNotificationWithStreamConditionsRequest
   */
  public resolve?: boolean;

  /**
   * @type {string[]}
   * @memberof EmailNotificationWithStreamConditionsRequest
   */
  public emails?: string[];

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

  constructor(obj: Partial<EmailNotificationWithStreamConditionsRequest>) {

    this.resolve = obj.resolve;
    this.emails = obj.emails || [];
    this.muted = obj.muted;
    this.conditions = map<AbstractCondition>(obj.conditions, AbstractCondition);
  }
}

export default EmailNotificationWithStreamConditionsRequest;

