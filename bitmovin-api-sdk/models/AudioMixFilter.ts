import {map} from '../common/Mapper';
import AudioMixChannel from './AudioMixChannel';
import AudioMixChannelLayout from './AudioMixChannelLayout';
import Filter from './Filter';

/**
 * @export
 * @class AudioMixFilter
 */
export default class AudioMixFilter extends Filter {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
    this.audioMixChannels = map<AudioMixChannel>(obj.audioMixChannels, AudioMixChannel);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {AudioMixChannelLayout}
   * @memberof AudioMixFilter
   */
  public channelLayout: AudioMixChannelLayout;
  /**
   * List of mixed channels that matches the channel layout
   * @type {Array<AudioMixChannel>}
   * @memberof AudioMixFilter
   */
  public audioMixChannels: Array<AudioMixChannel>;
}
