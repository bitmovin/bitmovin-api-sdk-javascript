import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class FairPlayDrm
 */
export default class FairPlayDrm extends Drm {
  constructor(obj: any) {
    super(obj);
    this.key = map(obj.key);
    this.iv = map(obj.iv);
    this.uri = map(obj.uri);
  }

  /**
   * 16 byte Encryption key, 32 hexadecimal characters
   * @type {string}
   * @memberof FairPlayDrm
   */
  public key: string;
  /**
   * 16 byte initialization vector
   * @type {string}
   * @memberof FairPlayDrm
   */
  public iv: string;
  /**
   * Url of the licensing server
   * @type {string}
   * @memberof FairPlayDrm
   */
  public uri?: string;
}
