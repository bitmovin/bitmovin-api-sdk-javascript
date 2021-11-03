import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import WebhookHttpMethod from './WebhookHttpMethod';
import WebhookSignature from './WebhookSignature';

/**
 * @export
 * @class Webhook
 */
export class Webhook extends BitmovinResource {
  /**
   * Webhook URL (required)
   * @type {string}
   * @memberof Webhook
   */
  public url?: string;

  /**
   * HTTP method used for the webhook
   * @type {WebhookHttpMethod}
   * @memberof Webhook
   */
  public method?: WebhookHttpMethod;

  /**
   * Skip verification of the SSL certificate
   * @type {boolean}
   * @memberof Webhook
   */
  public insecureSsl?: boolean;

  /**
   * Signature used for the webhook
   * @type {WebhookSignature}
   * @memberof Webhook
   */
  public signature?: WebhookSignature;

  /**
   * JSON schema of the webhook payload
   * @type {any}
   * @memberof Webhook
   */
  public schema?: any;

  constructor(obj?: Partial<Webhook>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.method = map(obj.method);
    this.insecureSsl = map(obj.insecureSsl);
    this.signature = map(obj.signature, WebhookSignature);
    this.schema = map(obj.schema);
  }
}

export default Webhook;

