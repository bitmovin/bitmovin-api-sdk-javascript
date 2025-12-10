import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatEventType from './LiveEncodingHeartbeatEventType';

/**
 * @export
 * @class LiveEncodingHeartbeatEventDetails
 */
export class LiveEncodingHeartbeatEventDetails {
  /**
   * @type {LiveEncodingHeartbeatEventType}
   * @memberof LiveEncodingHeartbeatEventDetails
   */
  public eventType?: LiveEncodingHeartbeatEventType;

  /**
   * Short description of the event
   * @type {string}
   * @memberof LiveEncodingHeartbeatEventDetails
   */
  public message?: string;

  constructor(obj?: Partial<LiveEncodingHeartbeatEventDetails>) {
    if(!obj) {
      return;
    }
    this.eventType = map(obj.eventType);
    this.message = map(obj.message);
  }
}

export default LiveEncodingHeartbeatEventDetails;

