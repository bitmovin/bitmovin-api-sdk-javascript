import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import DtsMode from './DtsMode';

/**
 * @export
 * @class DtsAudioConfiguration
 */
export class DtsAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof DtsAudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.DTS;

  /**
   * There are two DTS modes available: DTS Express Audio (EXPRESS_AUDIO) and DTS Digital Surround (DIGITAL_SURROUND)
   * @type {DtsMode}
   * @memberof DtsAudioConfiguration
   */
  public mode?: DtsMode;

  constructor(obj?: Partial<DtsAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.mode = map(obj.mode);
  }
}

export default DtsAudioConfiguration;

