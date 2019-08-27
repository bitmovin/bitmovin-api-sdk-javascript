import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';
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
  public type: 'PLAYREADY' = 'PLAYREADY';

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

  constructor(obj: Partial<PlayReadyDrm>) {
    super(obj);

    this.key = obj.key;
    this.keySeed = obj.keySeed;
    this.laUrl = obj.laUrl;
    this.pssh = obj.pssh;
    this.method = obj.method;
    this.kid = obj.kid;
  }
}

export default PlayReadyDrm;

