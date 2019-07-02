import {map} from '../common/Mapper';
import AesEncryptionMethod from './AesEncryptionMethod';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class AesEncryptionDrm
 */
export class AesEncryptionDrm extends Drm {
  constructor(obj: any) {
    super(obj);
    this.key = map(obj.key);
    this.iv = map(obj.iv);
    this.keyFileUri = map(obj.keyFileUri);
    this.method = map(obj.method);
  }

  /**
   * 16 byte Encryption key, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof AesEncryptionDrm
   */
  public key: string;
  /**
   * 16 byte initialization vector
   * @type {string}
   * @memberof AesEncryptionDrm
   */
  public iv?: string;
  /**
   * Path relative to the output for referencing in the manifest. If this value is not set the key file will be written automatically to the output folder.
   * @type {string}
   * @memberof AesEncryptionDrm
   */
  public keyFileUri?: string;
  /**
   * @type {AesEncryptionMethod}
   * @memberof AesEncryptionDrm
   */
  public method: AesEncryptionMethod;
}

export default AesEncryptionDrm;

