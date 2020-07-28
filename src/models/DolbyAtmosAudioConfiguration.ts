import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import DolbyAtmosLoudnessControl from './DolbyAtmosLoudnessControl';

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
  public type: CodecConfigType.DOLBY_ATMOS = CodecConfigType.DOLBY_ATMOS;

  /**
   * Settings for loudness control (required)
   * @type {DolbyAtmosLoudnessControl}
   * @memberof DolbyAtmosAudioConfiguration
   */
  public loudnessControl?: DolbyAtmosLoudnessControl;

  constructor(obj?: Partial<DolbyAtmosAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.loudnessControl = map(obj.loudnessControl, DolbyAtmosLoudnessControl);
  }
}

export default DolbyAtmosAudioConfiguration;

