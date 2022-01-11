import {map, mapArray} from '../common/Mapper';
import Drm from './Drm';
import DrmType from './DrmType';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class MarlinDrm
 */
export class MarlinDrm extends Drm {
  /**
   * Discriminator property for Drm
   * @type {string}
   * @memberof MarlinDrm
   */
  public readonly type: DrmType = DrmType.MARLIN;

  /**
   * 16 byte key in hex (32 characters) (required)
   * @type {string}
   * @memberof MarlinDrm
   */
  public key?: string;

  /**
   * 16 byte key in hex (32 characters) (required)
   * @type {string}
   * @memberof MarlinDrm
   */
  public kid?: string;

  constructor(obj?: Partial<MarlinDrm>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
    this.kid = map(obj.kid);
  }
}

export default MarlinDrm;

