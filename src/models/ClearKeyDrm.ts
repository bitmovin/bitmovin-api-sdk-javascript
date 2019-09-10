import {map, mapArray} from '../common/Mapper';
import Drm from './Drm';
import DrmType from './DrmType';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class ClearKeyDrm
 */
export class ClearKeyDrm extends Drm {
  /**
   * Discriminator property for Drm
   * @type {string}
   * @memberof ClearKeyDrm
   */
  public type: DrmType.CLEARKEY = DrmType.CLEARKEY;

  /**
   * 16 byte encryption key, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof ClearKeyDrm
   */
  public key?: string;

  /**
   * 16 byte key id (required)
   * @type {string}
   * @memberof ClearKeyDrm
   */
  public kid?: string;

  constructor(obj?: Partial<ClearKeyDrm>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
    this.kid = map(obj.kid);
  }
}

export default ClearKeyDrm;

