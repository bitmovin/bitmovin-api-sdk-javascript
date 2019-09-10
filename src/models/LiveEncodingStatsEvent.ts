import {map, mapArray} from '../common/Mapper';
import LiveEncodingStatsEventDetails from './LiveEncodingStatsEventDetails';

/**
 * @export
 * @class LiveEncodingStatsEvent
 */
export class LiveEncodingStatsEvent {
  /**
   * Timestamp of the event formatted in UTC: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof LiveEncodingStatsEvent
   */
  public time?: Date;

  /**
   * @type {LiveEncodingStatsEventDetails}
   * @memberof LiveEncodingStatsEvent
   */
  public details?: LiveEncodingStatsEventDetails;

  constructor(obj?: Partial<LiveEncodingStatsEvent>) {
    if(!obj) {
      return;
    }
    this.time = map(obj.time, Date);
    this.details = map(obj.details, LiveEncodingStatsEventDetails);
  }
}

export default LiveEncodingStatsEvent;

