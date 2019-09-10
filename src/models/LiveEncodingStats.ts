import {map, mapArray} from '../common/Mapper';
import LiveEncodingStatsEvent from './LiveEncodingStatsEvent';
import LiveEncodingStatus from './LiveEncodingStatus';
import StreamInfos from './StreamInfos';

/**
 * @export
 * @class LiveEncodingStats
 */
export class LiveEncodingStats {
  /**
   * @type {LiveEncodingStatus}
   * @memberof LiveEncodingStats
   */
  public status?: LiveEncodingStatus;

  /**
   * List of events
   * @type {LiveEncodingStatsEvent[]}
   * @memberof LiveEncodingStats
   */
  public events?: LiveEncodingStatsEvent[];

  /**
   * List of statistics
   * @type {StreamInfos[]}
   * @memberof LiveEncodingStats
   */
  public statistics?: StreamInfos[];

  constructor(obj?: Partial<LiveEncodingStats>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.events = mapArray(obj.events, LiveEncodingStatsEvent);
    this.statistics = mapArray(obj.statistics, StreamInfos);
  }
}

export default LiveEncodingStats;

