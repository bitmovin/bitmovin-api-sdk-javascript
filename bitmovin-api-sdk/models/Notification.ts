import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class Notification
 */
export default class Notification extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.resolve = map(obj.resolve);
    this.resourceId = map(obj.resourceId);
    this.triggeredAt = map(obj.triggeredAt);
    this.type = map(obj.type);
    this.eventType = map(obj.eventType);
    this.category = map(obj.category);
    this.resourceType = map(obj.resourceType);
    this.muted = map(obj.muted);
  }

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
}
