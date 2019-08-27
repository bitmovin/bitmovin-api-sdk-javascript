import {map} from '../common/Mapper';
import Drm from './Drm';
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
  public type: 'CLEARKEY' = 'CLEARKEY';

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

  constructor(obj: Partial<ClearKeyDrm>) {
    super(obj);

    this.key = obj.key;
    this.kid = obj.kid;
  }
}

export default ClearKeyDrm;

