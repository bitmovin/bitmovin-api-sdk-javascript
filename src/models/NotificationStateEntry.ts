import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import NotificationStates from './NotificationStates';

/**
 * @export
 * @class NotificationStateEntry
 */
export class NotificationStateEntry extends BitmovinResponse {
  /**
   * @type {NotificationStates}
   * @memberof NotificationStateEntry
   */
  public state?: NotificationStates;

  /**
   * Indicate if notification was sent (required)
   * @type {boolean}
   * @memberof NotificationStateEntry
   */
  public muted?: boolean;

  /**
   * The notification this state belongs to (required)
   * @type {string}
   * @memberof NotificationStateEntry
   */
  public notificationId?: string;

  /**
   * Indicate if triggered for specific resource (required)
   * @type {string}
   * @memberof NotificationStateEntry
   */
  public resourceId?: string;

  /**
   * @type {Date}
   * @memberof NotificationStateEntry
   */
  public triggeredAt?: Date;

  constructor(obj: Partial<NotificationStateEntry>) {
    super(obj);

    this.state = obj.state;
    this.muted = obj.muted;
    this.notificationId = obj.notificationId;
    this.resourceId = obj.resourceId;
    this.triggeredAt = map<Date>(obj.triggeredAt, Date);
  }
}

export default NotificationStateEntry;

