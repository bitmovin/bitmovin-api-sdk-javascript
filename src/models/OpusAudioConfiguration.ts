import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import OpusChannelLayout from './OpusChannelLayout';

/**
 * @export
 * @class OpusAudioConfiguration
 */
export class OpusAudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {OpusChannelLayout}
   * @memberof OpusAudioConfiguration
   */
  public channelLayout?: OpusChannelLayout;
}

export default OpusAudioConfiguration;

