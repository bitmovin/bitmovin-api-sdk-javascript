import {map} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class AacAudioConfiguration
 */
export class AacAudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof AacAudioConfiguration
   */
  public channelLayout?: AacChannelLayout;

  constructor(obj: Partial<AacAudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default AacAudioConfiguration;

