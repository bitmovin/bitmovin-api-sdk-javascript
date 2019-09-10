import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import OpusChannelLayout from './OpusChannelLayout';

/**
 * @export
 * @class OpusAudioConfiguration
 */
export class OpusAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof OpusAudioConfiguration
   */
  public type: CodecConfigType.OPUS = CodecConfigType.OPUS;

  /**
   * Channel layout of the audio codec configuration
   * @type {OpusChannelLayout}
   * @memberof OpusAudioConfiguration
   */
  public channelLayout?: OpusChannelLayout;

  constructor(obj?: Partial<OpusAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
  }
}

export default OpusAudioConfiguration;

