import {map, mapArray} from '../common/Mapper';
import StreamsVideoEncodingStatus from './StreamsVideoEncodingStatus';
import StreamsVideoQuality from './StreamsVideoQuality';

/**
 * @export
 * @class StreamsVideoEncodingTask
 */
export class StreamsVideoEncodingTask {
  /**
   * Quality of the encoding
   * @type {StreamsVideoQuality}
   * @memberof StreamsVideoEncodingTask
   */
  public quality?: StreamsVideoQuality;

  /**
   * Current state of the encoding
   * @type {StreamsVideoEncodingStatus}
   * @memberof StreamsVideoEncodingTask
   */
  public status?: StreamsVideoEncodingStatus;

  constructor(obj?: Partial<StreamsVideoEncodingTask>) {
    if(!obj) {
      return;
    }
    this.quality = map(obj.quality);
    this.status = map(obj.status);
  }
}

export default StreamsVideoEncodingTask;

