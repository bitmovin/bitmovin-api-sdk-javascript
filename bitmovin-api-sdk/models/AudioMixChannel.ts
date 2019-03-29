import {map} from '../common/Mapper';
import SourceChannel from './SourceChannel';

/**
 * @export
 * @class AudioMixChannel
 */
export default class AudioMixChannel {
  constructor(obj: any) {
    this.channelNumber = map(obj.channelNumber);
    this.sourceChannels = map<SourceChannel>(obj.sourceChannels, SourceChannel);
  }

  /**
   * Channel number of this mix (starting with 0)
   * @type {number}
   * @memberof AudioMixChannel
   */
  public channelNumber: number;
  /**
   * List of source channels to be mixed
   * @type {Array<SourceChannel>}
   * @memberof AudioMixChannel
   */
  public sourceChannels: Array<SourceChannel>;
}
