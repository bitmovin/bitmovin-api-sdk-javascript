import {map} from '../common/Mapper';
import AudioMixInputChannelLayout from './AudioMixInputChannelLayout';
import AudioMixInputStreamChannel from './AudioMixInputStreamChannel';
import InputStream from './InputStream';

/**
 * @export
 * @class AudioMixInputStream
 */
export class AudioMixInputStream extends InputStream {
  /**
   * Channel layout of the audio mix input stream
   * @type {AudioMixInputChannelLayout}
   * @memberof AudioMixInputStream
   */
  public channelLayout?: AudioMixInputChannelLayout;

  /**
   * @type {AudioMixInputStreamChannel[]}
   * @memberof AudioMixInputStream
   */
  public audioMixChannels?: AudioMixInputStreamChannel[];

  constructor(obj: Partial<AudioMixInputStream>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
    this.audioMixChannels = map<AudioMixInputStreamChannel>(obj.audioMixChannels, AudioMixInputStreamChannel);
  }
}

export default AudioMixInputStream;

