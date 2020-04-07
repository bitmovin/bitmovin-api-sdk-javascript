import {map, mapArray} from '../common/Mapper';
import AudioMixChannelType from './AudioMixChannelType';
import AudioMixInputStreamSourceChannel from './AudioMixInputStreamSourceChannel';

/**
 * @export
 * @class AudioMixInputStreamChannel
 */
export class AudioMixInputStreamChannel {
  /**
   * The id of the input stream that should be used for mixing.
   * @type {string}
   * @memberof AudioMixInputStreamChannel
   */
  public inputStreamId?: string;

  /**
   * @type {AudioMixChannelType}
   * @memberof AudioMixInputStreamChannel
   */
  public outputChannelType?: AudioMixChannelType;

  /**
   * Number of this output channel. If type is 'CHANNEL_NUMBER', this must be set.
   * @type {number}
   * @memberof AudioMixInputStreamChannel
   */
  public outputChannelNumber?: number;

  /**
   * List of source channels to be mixed
   * @type {AudioMixInputStreamSourceChannel[]}
   * @memberof AudioMixInputStreamChannel
   */
  public sourceChannels?: AudioMixInputStreamSourceChannel[];

  constructor(obj?: Partial<AudioMixInputStreamChannel>) {
    if(!obj) {
      return;
    }
    this.inputStreamId = map(obj.inputStreamId);
    this.outputChannelType = map(obj.outputChannelType);
    this.outputChannelNumber = map(obj.outputChannelNumber);
    this.sourceChannels = mapArray(obj.sourceChannels, AudioMixInputStreamSourceChannel);
  }
}

export default AudioMixInputStreamChannel;

