import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class Notification
 */
export class Notification extends BitmovinResponse {
  /**
   * Notify when condition resolves after it was met
   * @type {boolean}
   * @memberof Notification
   */
  public resolve?: boolean;

  /**
   * Specific resource, e.g. encoding id
   * @type {string}
   * @memberof Notification
   */
  public resourceId?: string;

  /**
   * Last time the notification was triggered
   * @type {Date}
   * @memberof Notification
   */
  public triggeredAt?: Date;

  /**
   * @type {string}
   * @memberof Notification
   */
  public type?: string;

  /**
   * @type {string}
   * @memberof Notification
   */
  public eventType?: string;

  /**
   * @type {string}
   * @memberof Notification
   */
  public category?: string;

  /**
   * @type {string}
   * @memberof Notification
   */
  public resourceType?: string;

  /**
   * @type {boolean}
   * @memberof Notification
   */
  public muted?: boolean;

  constructor(obj: Partial<Notification>) {
    super(obj);

    this.resolve = obj.resolve;
    this.resourceId = obj.resourceId;
    this.triggeredAt = map<Date>(obj.triggeredAt, Date);
    this.type = obj.type;
    this.eventType = obj.eventType;
    this.category = obj.category;
    this.resourceType = obj.resourceType;
    this.muted = obj.muted;
  }
}

export default Notification;

