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
   * Name of the mid roll asset name
   * @type {string[]}
   * @memberof LiveEncodingStatsEventDetails
   */
  public midRollAssetNames?: string[];

  /**
   * Duration in seconds
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public durationInSeconds?: number;

  constructor(obj?: Partial<LiveEncodingStatsEventDetails>) {
    if(!obj) {
      return;
    }
    this.eventType = map(obj.eventType);
    this.message = map(obj.message);
    this.midRollAssetNames = mapArray(obj.midRollAssetNames);
    this.durationInSeconds = map(obj.durationInSeconds);
  }
}

export default LiveEncodingStatsEventDetails;

