import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class FairPlayDrm
 */
export class FairPlayDrm extends Drm {
  /**
   * Discriminator property for Drm
   * @type {string}
   * @memberof FairPlayDrm
   */
  public type: 'FAIRPLAY' = 'FAIRPLAY';

  /**
   * 16 byte Encryption key, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof FairPlayDrm
   */
  public key?: string;

  /**
   * 16 byte initialization vector (required)
   * @type {string}
   * @memberof FairPlayDrm
   */
  public iv?: string;

  /**
   * Url of the licensing server
   * @type {string}
   * @memberof FairPlayDrm
   */
  public uri?: string;

  constructor(obj: Partial<FairPlayDrm>) {
    super(obj);

    this.key = obj.key;
    this.iv = obj.iv;
    this.uri = obj.uri;
  }
}

export default FairPlayDrm;

