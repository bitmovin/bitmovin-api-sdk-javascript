import {map, mapArray} from '../common/Mapper';
import AudioMixChannel from './AudioMixChannel';
import AudioMixChannelLayout from './AudioMixChannelLayout';
import Filter from './Filter';
import FilterType from './FilterType';

/**
 * @export
 * @class AudioMixFilter
 */
export class AudioMixFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof AudioMixFilter
   */
  public readonly type: FilterType = FilterType.AUDIO_MIX;

  /**
   * Channel layout of the audio codec configuration (required)
   * @type {AudioMixChannelLayout}
   * @memberof AudioMixFilter
   */
  public channelLayout?: AudioMixChannelLayout;

  /**
   * List of mixed channels that matches the channel layout (required)
   * @type {AudioMixChannel[]}
   * @memberof AudioMixFilter
   */
  public audioMixChannels?: AudioMixChannel[];

  constructor(obj?: Partial<AudioMixFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.audioMixChannels = mapArray(obj.audioMixChannels, AudioMixChannel);
  }
}

export default AudioMixFilter;

