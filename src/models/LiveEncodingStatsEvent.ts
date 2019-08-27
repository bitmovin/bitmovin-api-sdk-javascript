import {map} from '../common/Mapper';
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

  constructor(obj: Partial<LiveEncodingStatsEvent>) {

    this.time = map<Date>(obj.time, Date);
    this.details = map<LiveEncodingStatsEventDetails>(obj.details, LiveEncodingStatsEventDetails);
  }
}

export default LiveEncodingStatsEvent;

