import {map} from '../common/Mapper';
import SourceChannelType from './SourceChannelType';

/**
 * @export
 * @class SourceChannel
 */
export class SourceChannel {
  constructor(obj: any) {
    this.gain = map(obj.gain);
    this.type = map(obj.type);
    this.channelNumber = map(obj.channelNumber);
  }

  /**
   * Gain for this source channel. Default is 1.0.
   * @type {number}
   * @memberof SourceChannel
   */
  public gain?: number;
  /**
   * @type {SourceChannelType}
   * @memberof SourceChannel
   */
  public type: SourceChannelType;
  /**
   * Number of this source channel. If type is 'CHANNEL_NUMBER', this must be set.
   * @type {number}
   * @memberof SourceChannel
   */
  public channelNumber?: number;
}

export default SourceChannel;

