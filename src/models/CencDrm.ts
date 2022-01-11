import {map, mapArray} from '../common/Mapper';
import CencFairPlay from './CencFairPlay';
import CencMarlin from './CencMarlin';
import CencPlayReady from './CencPlayReady';
import CencWidevine from './CencWidevine';
import Drm from './Drm';
import DrmType from './DrmType';
import EncodingOutput from './EncodingOutput';
import EncryptionMode from './EncryptionMode';
import IvSize from './IvSize';

/**
 * @export
 * @class CencDrm
 */
export class CencDrm extends Drm {
  /**
   * Discriminator property for Drm
   * @type {string}
   * @memberof CencDrm
   */
  public readonly type: DrmType = DrmType.CENC;

  /**
   * 16 byte encryption key, 32 hexadecimal characters (required)
   * @type {string}
   * @memberof CencDrm
   */
  public key?: string;

  /**
   * 16 byte encryption key id. Required for any other DRM but FairPlay
   * @type {string}
   * @memberof CencDrm
   */
  public kid?: string;

  /**
   * The encryption method to use. Default is `CTR` (required)
   * @type {EncryptionMode}
   * @memberof CencDrm
   */
  public encryptionMode?: EncryptionMode;

  /**
   * Size of the initialization vector
   * @type {IvSize}
   * @memberof CencDrm
   */
  public ivSize?: IvSize;

  /**
   * Enables compatibility with the Protected Interoperable File Format (PIFF) specification
   * @type {boolean}
   * @memberof CencDrm
   */
  public enablePiffCompatibility?: boolean;

  /**
   * Configuration for Widevine DRM
   * @type {CencWidevine}
   * @memberof CencDrm
   */
  public widevine?: CencWidevine;

  /**
   * Configuration for PlayReady DRM
   * @type {CencPlayReady}
   * @memberof CencDrm
   */
  public playReady?: CencPlayReady;

  /**
   * Configuration for Marlin DRM
   * @type {CencMarlin}
   * @memberof CencDrm
   */
  public marlin?: CencMarlin;

  /**
   * Configuration for FairPlay DRM
   * @type {CencFairPlay}
   * @memberof CencDrm
   */
  public fairPlay?: CencFairPlay;

  constructor(obj?: Partial<CencDrm>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
    this.kid = map(obj.kid);
    this.encryptionMode = map(obj.encryptionMode);
    this.ivSize = map(obj.ivSize);
    this.enablePiffCompatibility = map(obj.enablePiffCompatibility);
    this.widevine = map(obj.widevine, CencWidevine);
    this.playReady = map(obj.playReady, CencPlayReady);
    this.marlin = map(obj.marlin, CencMarlin);
    this.fairPlay = map(obj.fairPlay, CencFairPlay);
  }
}

export default CencDrm;

