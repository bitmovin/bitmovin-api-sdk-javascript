import {map, mapArray} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';

/**
 * @export
 * @class AacAudioConfiguration
 */
export class AacAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof AacAudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.AAC;

  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof AacAudioConfiguration
   */
  public channelLayout?: AacChannelLayout;

  /**
   * The highest frequency that will pass the audio encoder. This value is optional.
   * @type {number}
   * @memberof AacAudioConfiguration
   */
  public cutoffFrequency?: number;

  constructor(obj?: Partial<AacAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.cutoffFrequency = map(obj.cutoffFrequency);
  }
}

export default AacAudioConfiguration;

