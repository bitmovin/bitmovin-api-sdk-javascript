import {map} from '../common/Mapper';
import EncodingStatistics from './EncodingStatistics';

/**
 * @export
 * @class EncodingStatisticsVod
 */
export class EncodingStatisticsVod extends EncodingStatistics {
  constructor(obj: any) {
    super(obj);
    this.timeEnqueued = map(obj.timeEnqueued);
    this.realTimeFactor = map(obj.realTimeFactor);
  }

  /**
   * Time in seconds encoded for this encoding. (required)
   * @type {number}
   * @memberof EncodingStatisticsVod
   */
  public timeEnqueued: number;
  /**
   * The realtime factor. (required)
   * @type {number}
   * @memberof EncodingStatisticsVod
   */
  public realTimeFactor: number;
}

export default EncodingStatisticsVod;

