import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import NotificationStates from './NotificationStates';

/**
 * @export
 * @class NotificationStateEntry
 */
export class NotificationStateEntry extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.state = map(obj.state);
    this.muted = map(obj.muted);
    this.notificationId = map(obj.notificationId);
    this.resourceId = map(obj.resourceId);
    this.triggeredAt = map(obj.triggeredAt, Date);
  }

  /**
   * @type {NotificationStates}
   * @memberof NotificationStateEntry
   */
  public state: NotificationStates;
  /**
   * Indicate if notification was sent
   * @type {boolean}
   * @memberof NotificationStateEntry
   */
  public muted: boolean;
  /**
   * The notification this state belongs to
   * @type {string}
   * @memberof NotificationStateEntry
   */
  public notificationId: string;
  /**
   * Indicate if triggered for specific resource
   * @type {string}
   * @memberof NotificationStateEntry
   */
  public resourceId: string;
  /**
   * @type {Date}
   * @memberof NotificationStateEntry
   */
  public triggeredAt: Date;
}

export default NotificationStateEntry;

