import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import PcmChannelLayout from './PcmChannelLayout';
import PcmPresetConfiguration from './PcmPresetConfiguration';
import PcmSampleFormat from './PcmSampleFormat';

/**
 * @export
 * @class PcmAudioConfiguration
 */
export class PcmAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof PcmAudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.PCM;

  /**
   * Use a set of well defined configurations preset to support certain use cases. Can be overwritten with more specific values.
   * @type {PcmPresetConfiguration}
   * @memberof PcmAudioConfiguration
   */
  public presetConfiguration?: PcmPresetConfiguration;

  /**
   * Channel layout of the audio codec configuration
   * @type {PcmChannelLayout}
   * @memberof PcmAudioConfiguration
   */
  public channelLayout?: PcmChannelLayout;

  /**
   * Sampling format of the audio codec configuration
   * @type {PcmSampleFormat}
   * @memberof PcmAudioConfiguration
   */
  public sampleFormat?: PcmSampleFormat;

  constructor(obj?: Partial<PcmAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.presetConfiguration = map(obj.presetConfiguration);
    this.channelLayout = map(obj.channelLayout);
    this.sampleFormat = map(obj.sampleFormat);
  }
}

export default PcmAudioConfiguration;

