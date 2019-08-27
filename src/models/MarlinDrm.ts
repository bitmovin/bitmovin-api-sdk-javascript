import {map} from '../common/Mapper';
import Drm from './Drm';
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
  public type: 'MARLIN' = 'MARLIN';

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

  constructor(obj: Partial<MarlinDrm>) {
    super(obj);

    this.key = obj.key;
    this.kid = obj.kid;
  }
}

export default MarlinDrm;

