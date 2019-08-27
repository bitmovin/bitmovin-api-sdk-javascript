import {map} from '../common/Mapper';
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

  constructor(obj: Partial<LiveEncodingStats>) {

    this.status = obj.status;
    this.events = map<LiveEncodingStatsEvent>(obj.events, LiveEncodingStatsEvent) || [];
    this.statistics = map<StreamInfos>(obj.statistics, StreamInfos) || [];
  }
}

export default LiveEncodingStats;

