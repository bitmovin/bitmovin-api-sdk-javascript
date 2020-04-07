import {map, mapArray} from '../common/Mapper';
import AudioMixSourceChannelType from './AudioMixSourceChannelType';

/**
 * @export
 * @class AudioMixInputStreamSourceChannel
 */
export class AudioMixInputStreamSourceChannel {
  /**
   * Gain for this source channel. Default is 1.0.
   * @type {number}
   * @memberof AudioMixInputStreamSourceChannel
   */
  public gain?: number;

  /**
   * @type {AudioMixSourceChannelType}
   * @memberof AudioMixInputStreamSourceChannel
   */
  public type?: AudioMixSourceChannelType;

  /**
   * Number of this source channel. If type is 'CHANNEL_NUMBER', this must be set.
   * @type {number}
   * @memberof AudioMixInputStreamSourceChannel
   */
  public channelNumber?: number;

  constructor(obj?: Partial<AudioMixInputStreamSourceChannel>) {
    if(!obj) {
      return;
    }
    this.gain = map(obj.gain);
    this.type = map(obj.type);
    this.channelNumber = map(obj.channelNumber);
  }
}

export default AudioMixInputStreamSourceChannel;

