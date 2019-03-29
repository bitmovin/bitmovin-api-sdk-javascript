import {map} from '../common/Mapper';
import LiveEncodingStatsEventDetails from './LiveEncodingStatsEventDetails';

/**
 * @export
 * @class LiveEncodingStatsEvent
 */
export default class LiveEncodingStatsEvent {
  constructor(obj: any) {
    this.time = map(obj.time);
    this.details = map<LiveEncodingStatsEventDetails>(obj.details, LiveEncodingStatsEventDetails);
  }

  /**
   * Timestamp of the event expressed in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof LiveEncodingStatsEvent
   */
  public time: Date;
  /**
   * @type {LiveEncodingStatsEventDetails}
   * @memberof LiveEncodingStatsEvent
   */
  public details: LiveEncodingStatsEventDetails;
}
