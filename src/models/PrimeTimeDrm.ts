import {map, mapArray} from '../common/Mapper';
import Drm from './Drm';
import DrmType from './DrmType';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class PrimeTimeDrm
 */
export class PrimeTimeDrm extends Drm {
  /**
   * Discriminator property for Drm
   * @type {string}
   * @memberof PrimeTimeDrm
   */
  public type: DrmType.PRIMETIME = DrmType.PRIMETIME;

  /**
   * 16 byte Encryption key, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof PrimeTimeDrm
   */
  public key?: string;

  /**
   * 16 byte Key id, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof PrimeTimeDrm
   */
  public kid?: string;

  /**
   * Base 64 Encoded (required)
   * @type {string}
   * @memberof PrimeTimeDrm
   */
  public pssh?: string;

  constructor(obj?: Partial<PrimeTimeDrm>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
    this.kid = map(obj.kid);
    this.pssh = map(obj.pssh);
  }
}

export default PrimeTimeDrm;

