import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import OpusChannelLayout from './OpusChannelLayout';

/**
 * @export
 * @class OpusAudioConfiguration
 */
export class OpusAudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {OpusChannelLayout}
   * @memberof OpusAudioConfiguration
   */
  public channelLayout?: OpusChannelLayout;

  constructor(obj: Partial<OpusAudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default OpusAudioConfiguration;

