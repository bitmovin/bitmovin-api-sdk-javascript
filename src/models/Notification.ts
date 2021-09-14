import {map, mapArray} from '../common/Mapper';
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

  /**
   * User-specific meta data. This can hold anything.
   * @type {{ [key: string]: any; }}
   * @memberof Notification
   */
  public customData?: { [key: string]: any; };

  constructor(obj?: Partial<Notification>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.resolve = map(obj.resolve);
    this.resourceId = map(obj.resourceId);
    this.triggeredAt = map(obj.triggeredAt, Date);
    this.type = map(obj.type);
    this.eventType = map(obj.eventType);
    this.category = map(obj.category);
    this.resourceType = map(obj.resourceType);
    this.muted = map(obj.muted);
    this.customData = map(obj.customData);
  }
}

export default Notification;

