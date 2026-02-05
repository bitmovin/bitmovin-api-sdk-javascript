import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import DolbyAtmosLoudnessControl from './DolbyAtmosLoudnessControl';
import DolbyAtmosPreprocessing from './DolbyAtmosPreprocessing';

/**
 * @export
 * @class DolbyAtmosAudioConfiguration
 */
export class DolbyAtmosAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof DolbyAtmosAudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.DOLBY_ATMOS;

  /**
   * Settings for loudness control (required)
   * @type {DolbyAtmosLoudnessControl}
   * @memberof DolbyAtmosAudioConfiguration
   */
  public loudnessControl?: DolbyAtmosLoudnessControl;

  /**
   * @type {DolbyAtmosPreprocessing}
   * @memberof DolbyAtmosAudioConfiguration
   */
  public preprocessing?: DolbyAtmosPreprocessing;

  constructor(obj?: Partial<DolbyAtmosAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.loudnessControl = map(obj.loudnessControl, DolbyAtmosLoudnessControl);
    this.preprocessing = map(obj.preprocessing, DolbyAtmosPreprocessing);
  }
}

export default DolbyAtmosAudioConfiguration;

