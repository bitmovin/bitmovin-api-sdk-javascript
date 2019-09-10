import {map, mapArray} from '../common/Mapper';
import EncryptionType from './EncryptionType';

/**
 * @export
 * @class WebhookEncryption
 */
export class WebhookEncryption {
  /**
   * The encryption algorithm used for the webhook (required)
   * @type {EncryptionType}
   * @memberof WebhookEncryption
   */
  public type?: EncryptionType;

  /**
   * The key of the encryption (required)
   * @type {string}
   * @memberof WebhookEncryption
   */
  public key?: string;

  constructor(obj?: Partial<WebhookEncryption>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.key = map(obj.key);
  }
}

export default WebhookEncryption;

