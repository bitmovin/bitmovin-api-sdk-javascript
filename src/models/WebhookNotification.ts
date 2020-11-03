import {map, mapArray} from '../common/Mapper';
import Notification from './Notification';

/**
 * @export
 * @class WebhookNotification
 */
export class WebhookNotification extends Notification {
  /**
   * The destination URL where the webhook data is send to (required)
   * @type {string}
   * @memberof WebhookNotification
   */
  public url?: string;

  constructor(obj?: Partial<WebhookNotification>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
  }
}

export default WebhookNotification;

