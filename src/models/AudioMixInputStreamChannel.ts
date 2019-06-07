import {map} from '../common/Mapper';
import AudioMixChannelType from './AudioMixChannelType';

/**
 * @export
 * @class AudioMixInputStreamChannel
 */
export class AudioMixInputStreamChannel {
  constructor(obj: any) {
    this.inputStreamId = map(obj.inputStreamId);
    this.outputChannelType = map(obj.outputChannelType);
    this.outputChannelNumber = map(obj.outputChannelNumber);
  }

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
  public outputChannelType: AudioMixChannelType;
  /**
   * Number of this output channel. If type is 'CHANNEL_NUMBER', this must be set.
   * @type {number}
   * @memberof AudioMixInputStreamChannel
   */
  public outputChannelNumber?: number;
}

export default AudioMixInputStreamChannel;

