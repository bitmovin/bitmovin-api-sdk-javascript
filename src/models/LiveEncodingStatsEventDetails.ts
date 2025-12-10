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

  /**
   * Short description of the event
   * @type {string}
   * @memberof LiveEncodingStatsEventDetails
   */
  public message?: string;

  /**
   * Additional event details as key-value pairs
   * @type {string}
   * @memberof LiveEncodingStatsEventDetails
   */
  public additionalProperties?: string;

  constructor(obj?: Partial<LiveEncodingStatsEventDetails>) {
    if(!obj) {
      return;
    }
    this.eventType = map(obj.eventType);
    this.message = map(obj.message);
    this.additionalProperties = map(obj.additionalProperties);
  }
}

export default LiveEncodingStatsEventDetails;

