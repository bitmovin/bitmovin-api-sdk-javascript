import {map, mapArray} from '../common/Mapper';
import ClockSynchronizationMode from './ClockSynchronizationMode';
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
   * Source used for clock-synchronization
   * @type {ClockSynchronizationMode}
   * @memberof LiveEncodingStatsEventDetails
   */
  public source?: ClockSynchronizationMode;

  /**
   * Year specified in picture timing
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public year?: number;

  /**
   * Month specified in picture timing
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public month?: number;

  /**
   * Day specified in picture timing
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public day?: number;

  /**
   * Hours specified in picture timing
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public hours?: number;

  /**
   * Minutes specified in picture timing
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public minutes?: number;

  /**
   * Seconds specified in picture timing
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public seconds?: number;

  /**
   * Microseconds specified in picture timing
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public microSeconds?: number;

  constructor(obj?: Partial<LiveEncodingStatsEventDetails>) {
    if(!obj) {
      return;
    }
    this.eventType = map(obj.eventType);
    this.message = map(obj.message);
    this.source = map(obj.source);
    this.year = map(obj.year);
    this.month = map(obj.month);
    this.day = map(obj.day);
    this.hours = map(obj.hours);
    this.minutes = map(obj.minutes);
    this.seconds = map(obj.seconds);
    this.microSeconds = map(obj.microSeconds);
  }
}

export default LiveEncodingStatsEventDetails;

