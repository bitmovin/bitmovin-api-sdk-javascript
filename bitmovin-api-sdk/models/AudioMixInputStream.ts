import {map} from '../common/Mapper';
import AudioMixInputChannelLayout from './AudioMixInputChannelLayout';
import AudioMixInputStreamChannel from './AudioMixInputStreamChannel';
import BasicInputStream from './BasicInputStream';

/**
 * @export
 * @class AudioMixInputStream
 */
export default class AudioMixInputStream extends BasicInputStream {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
    this.audioMixChannels = map<AudioMixInputStreamChannel>(obj.audioMixChannels, AudioMixInputStreamChannel);
  }

  /**
   * Channel layout of the audio mix input stream
   * @type {AudioMixInputChannelLayout}
   * @memberof AudioMixInputStream
   */
  public channelLayout?: AudioMixInputChannelLayout;
  /**
   * @type {Array<AudioMixInputStreamChannel>}
   * @memberof AudioMixInputStream
   */
  public audioMixChannels?: Array<AudioMixInputStreamChannel>;
}
