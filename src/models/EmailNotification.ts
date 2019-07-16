import {map} from '../common/Mapper';
import Notification from './Notification';

/**
 * @export
 * @class EmailNotification
 */
export class EmailNotification extends Notification {
  /**
   * @type {string[]}
   * @memberof EmailNotification
   */
  public emails: string[];

  constructor(obj: Partial<EmailNotification>) {
    super(obj);
    this.emails = map(obj.emails);
  }
}

export default EmailNotification;

