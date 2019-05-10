import {map} from '../common/Mapper';
import AudioMixInputChannelLayout from './AudioMixInputChannelLayout';
import AudioMixInputStreamChannel from './AudioMixInputStreamChannel';
import InputStream from './InputStream';

/**
 * @export
 * @class AudioMixInputStream
 */
export default class AudioMixInputStream extends InputStream {
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
