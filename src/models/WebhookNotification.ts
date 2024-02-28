import {map, mapArray} from '../common/Mapper';
import Notification from './Notification';
import WebhookHttpMethod from './WebhookHttpMethod';
import WebhookSignature from './WebhookSignature';

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

  /**
   * HTTP method used for the webhook
   * @type {WebhookHttpMethod}
   * @memberof WebhookNotification
   */
  public method?: WebhookHttpMethod;

  /**
   * Skip verification of the SSL certificate
   * @type {boolean}
   * @memberof WebhookNotification
   */
  public insecureSsl?: boolean;

  /**
   * Signature used for the webhook
   * @type {WebhookSignature}
   * @memberof WebhookNotification
   */
  public signature?: WebhookSignature;

  constructor(obj?: Partial<WebhookNotification>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.method = map(obj.method);
    this.insecureSsl = map(obj.insecureSsl);
    this.signature = map(obj.signature, WebhookSignature);
  }
}

export default WebhookNotification;

