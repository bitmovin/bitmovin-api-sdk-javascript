import {map} from '../common/Mapper';
import EncryptionType from './EncryptionType';

/**
 * @export
 * @class WebhookEncryption
 */
export default class WebhookEncryption {
  constructor(obj: any) {
    this.type = map(obj.type);
    this.key = map(obj.key);
  }

  /**
   * The encryption algorithm used for the webhook
   * @type {EncryptionType}
   * @memberof WebhookEncryption
   */
  public type: EncryptionType;
  /**
   * The key of the encryption
   * @type {string}
   * @memberof WebhookEncryption
   */
  public key: string;
}
