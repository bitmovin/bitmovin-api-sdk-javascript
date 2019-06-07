import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class MarlinDrm
 */
export class MarlinDrm extends Drm {
  constructor(obj: any) {
    super(obj);
    this.key = map(obj.key);
    this.kid = map(obj.kid);
  }

  /**
   * 16 byte key in hex (32 characters)
   * @type {string}
   * @memberof MarlinDrm
   */
  public key: string;
  /**
   * 16 byte key in hex (32 characters)
   * @type {string}
   * @memberof MarlinDrm
   */
  public kid: string;
}

export default MarlinDrm;

