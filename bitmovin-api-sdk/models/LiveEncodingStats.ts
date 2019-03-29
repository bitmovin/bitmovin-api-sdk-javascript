import {map} from '../common/Mapper';
import LiveEncodingStatsEvent from './LiveEncodingStatsEvent';
import LiveEncodingStatus from './LiveEncodingStatus';
import StreamInfos from './StreamInfos';

/**
 * @export
 * @class LiveEncodingStats
 */
export default class LiveEncodingStats {
  constructor(obj: any) {
    this.status = map(obj.status);
    this.events = map<LiveEncodingStatsEvent>(obj.events, LiveEncodingStatsEvent);
    this.statistics = map<StreamInfos>(obj.statistics, StreamInfos);
  }

  /**
   * @type {LiveEncodingStatus}
   * @memberof LiveEncodingStats
   */
  public status: LiveEncodingStatus;
  /**
   * List of events
   * @type {Array<LiveEncodingStatsEvent>}
   * @memberof LiveEncodingStats
   */
  public events?: Array<LiveEncodingStatsEvent>;
  /**
   * List of statistics
   * @type {Array<StreamInfos>}
   * @memberof LiveEncodingStats
   */
  public statistics?: Array<StreamInfos>;
}
