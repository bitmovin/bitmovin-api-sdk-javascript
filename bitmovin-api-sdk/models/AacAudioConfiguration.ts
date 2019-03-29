import {map} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class AacAudioConfiguration
 */
export default class AacAudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof AacAudioConfiguration
   */
  public channelLayout?: AacChannelLayout;
}
