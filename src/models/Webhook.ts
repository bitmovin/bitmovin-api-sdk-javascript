import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import WebhookEncryption from './WebhookEncryption';
import WebhookHttpMethod from './WebhookHttpMethod';
import WebhookSignature from './WebhookSignature';

/**
 * @export
 * @class Webhook
 */
export class Webhook extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.url = map(obj.url);
    this.method = map(obj.method);
    this.insecureSsl = map(obj.insecureSsl);
    this.encryption = map<WebhookEncryption>(obj.encryption, WebhookEncryption);
    this.signature = map<WebhookSignature>(obj.signature, WebhookSignature);
  }

  /**
   * Webhook url (required)
   * @type {string}
   * @memberof Webhook
   */
  public url: string;
  /**
   * HTTP method used for the webhook
   * @type {WebhookHttpMethod}
   * @memberof Webhook
   */
  public method?: WebhookHttpMethod;
  /**
   * Whether to skip SSL certification verification or not
   * @type {boolean}
   * @memberof Webhook
   */
  public insecureSsl?: boolean;
  /**
   * Encryption used for the webhook
   * @type {WebhookEncryption}
   * @memberof Webhook
   */
  public encryption?: WebhookEncryption;
  /**
   * Signature used for the webhook
   * @type {WebhookSignature}
   * @memberof Webhook
   */
  public signature?: WebhookSignature;
}

export default Webhook;

