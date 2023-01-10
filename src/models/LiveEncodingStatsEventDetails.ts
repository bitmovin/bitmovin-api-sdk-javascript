import {map, mapArray} from '../common/Mapper';
import LiveEncodingEventName from './LiveEncodingEventName';

/**
 * @export
 * @class LiveEncodingStatsEventDetails
 */
export class LiveEncodingStatsEventDetails {
  /**
   * @type {LiveEncodingEventName}
   * @memberof LiveEncodingStatsEventDetails
   */
  public eventType?: LiveEncodingEventName;

  constructor(obj?: Partial<LiveEncodingStatsEventDetails>) {
    if(!obj) {
      return;
    }
    this.eventType = map(obj.eventType);
  }
}

export default LiveEncodingStatsEventDetails;

