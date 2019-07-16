import {map} from '../common/Mapper';
import AudioMixChannel from './AudioMixChannel';
import AudioMixChannelLayout from './AudioMixChannelLayout';
import Filter from './Filter';

/**
 * @export
 * @class AudioMixFilter
 */
export class AudioMixFilter extends Filter {
  /**
   * Channel layout of the audio codec configuration (required)
   * @type {AudioMixChannelLayout}
   * @memberof AudioMixFilter
   */
  public channelLayout: AudioMixChannelLayout;

  /**
   * List of mixed channels that matches the channel layout (required)
   * @type {AudioMixChannel[]}
   * @memberof AudioMixFilter
   */
  public audioMixChannels: AudioMixChannel[];

  constructor(obj: Partial<AudioMixFilter>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
    this.audioMixChannels = map<AudioMixChannel>(obj.audioMixChannels, AudioMixChannel);
  }
}

export default AudioMixFilter;

