import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatEventDetails from './LiveEncodingHeartbeatEventDetails';

/**
 * @export
 * @class LiveEncodingHeartbeatEvent
 */
export class LiveEncodingHeartbeatEvent {
  /**
   * Timestamp of the event, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof LiveEncodingHeartbeatEvent
   */
  public time?: Date;

  /**
   * @type {LiveEncodingHeartbeatEventDetails}
   * @memberof LiveEncodingHeartbeatEvent
   */
  public details?: LiveEncodingHeartbeatEventDetails;

  constructor(obj?: Partial<LiveEncodingHeartbeatEvent>) {
    if(!obj) {
      return;
    }
    this.time = map(obj.time, Date);
    this.details = map(obj.details, LiveEncodingHeartbeatEventDetails);
  }
}

export default LiveEncodingHeartbeatEvent;

