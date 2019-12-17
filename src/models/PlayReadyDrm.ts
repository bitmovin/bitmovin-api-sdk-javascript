import {map, mapArray} from '../common/Mapper';
import Drm from './Drm';
import DrmType from './DrmType';
import EncodingOutput from './EncodingOutput';
import PlayReadyAdditionalInformation from './PlayReadyAdditionalInformation';
import PlayReadyEncryptionMethod from './PlayReadyEncryptionMethod';

/**
 * @export
 * @class PlayReadyDrm
 */
export class PlayReadyDrm extends Drm {
  /**
   * Discriminator property for Drm
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public type: DrmType.PLAYREADY = DrmType.PLAYREADY;

  /**
   * 16 byte encryption key, 32 hexadecimal characters. Either key or keySeed is required
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public key?: string;

  /**
   * Key seed to generate key. Either key or keySeed is required
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public keySeed?: string;

  /**
   * URL of the license server
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public laUrl?: string;

  /**
   * Base64 encoded pssh payload
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public pssh?: string;

  /**
   * @type {PlayReadyEncryptionMethod}
   * @memberof PlayReadyDrm
   */
  public method?: PlayReadyEncryptionMethod;

  /**
   * Key identifier
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public kid?: string;

  /**
   * @type {PlayReadyAdditionalInformation}
   * @memberof PlayReadyDrm
   */
  public additionalInformation?: PlayReadyAdditionalInformation;

  constructor(obj?: Partial<PlayReadyDrm>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
    this.keySeed = map(obj.keySeed);
    this.laUrl = map(obj.laUrl);
    this.pssh = map(obj.pssh);
    this.method = map(obj.method);
    this.kid = map(obj.kid);
    this.additionalInformation = map(obj.additionalInformation, PlayReadyAdditionalInformation);
  }
}

export default PlayReadyDrm;

