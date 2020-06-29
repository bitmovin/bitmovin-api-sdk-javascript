import {map, mapArray} from '../common/Mapper';
import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';
import EgressInformation from './EgressInformation';
import EncodingStatistics from './EncodingStatistics';
import StatisticsPerMuxing from './StatisticsPerMuxing';
import StatisticsPerStream from './StatisticsPerStream';

/**
 * @export
 * @class EncodingStatisticsVod
 */
export class EncodingStatisticsVod extends EncodingStatistics {
  /**
   * Time in seconds encoded for this encoding. (required)
   * @type {number}
   * @memberof EncodingStatisticsVod
   */
  public timeEnqueued?: number;

  /**
   * The realtime factor. (required)
   * @type {number}
   * @memberof EncodingStatisticsVod
   */
  public realTimeFactor?: number;

  constructor(obj?: Partial<EncodingStatisticsVod>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.timeEnqueued = map(obj.timeEnqueued);
    this.realTimeFactor = map(obj.realTimeFactor);
  }
}

export default EncodingStatisticsVod;

