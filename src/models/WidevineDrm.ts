import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class WidevineDrm
 */
export class WidevineDrm extends Drm {
  constructor(obj: any) {
    super(obj);
    this.key = map(obj.key);
    this.kid = map(obj.kid);
    this.pssh = map(obj.pssh);
  }

  /**
   * 16 byte Encryption key, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof WidevineDrm
   */
  public key: string;
  /**
   * 16 byte Key id, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof WidevineDrm
   */
  public kid: string;
  /**
   * Base 64 Encoded (required)
   * @type {string}
   * @memberof WidevineDrm
   */
  public pssh: string;
}

export default WidevineDrm;

