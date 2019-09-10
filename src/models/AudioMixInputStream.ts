import {map, mapArray} from '../common/Mapper';
import AudioMixInputChannelLayout from './AudioMixInputChannelLayout';
import AudioMixInputStreamChannel from './AudioMixInputStreamChannel';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class AudioMixInputStream
 */
export class AudioMixInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof AudioMixInputStream
   */
  public type: InputStreamType.AUDIO_MIX = InputStreamType.AUDIO_MIX;

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

  constructor(obj?: Partial<AudioMixInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.audioMixChannels = mapArray(obj.audioMixChannels, AudioMixInputStreamChannel);
  }
}

export default AudioMixInputStream;

