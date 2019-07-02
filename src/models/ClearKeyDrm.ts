import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class ClearKeyDrm
 */
export class ClearKeyDrm extends Drm {
  constructor(obj: any) {
    super(obj);
    this.key = map(obj.key);
    this.kid = map(obj.kid);
  }

  /**
   * 16 byte encryption key, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof ClearKeyDrm
   */
  public key: string;
  /**
   * 16 byte key id (required)
   * @type {string}
   * @memberof ClearKeyDrm
   */
  public kid: string;
}

export default ClearKeyDrm;

