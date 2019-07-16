import {map} from '../common/Mapper';
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
  public eventName: LiveEncodingEventName;

  /**
   * The Audio/Video Drift in seconds. The drift was corrected by the RESYNCING event (occurs at event: RESYNCING)
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public avDriftInSeconds?: number;

  /**
   * The time the stream was in idle state in seconds (occurs at event: IDLE)
   * @type {number}
   * @memberof LiveEncodingStatsEventDetails
   */
  public idleDurationInSeconds?: number;

  /**
   * An optional error message, when the event is in error state (occurs at event: ERROR)
   * @type {string}
   * @memberof LiveEncodingStatsEventDetails
   */
  public errorMessage?: string;

  constructor(obj: Partial<LiveEncodingStatsEventDetails>) {
    this.eventName = map(obj.eventName);
    this.avDriftInSeconds = map(obj.avDriftInSeconds);
    this.idleDurationInSeconds = map(obj.idleDurationInSeconds);
    this.errorMessage = map(obj.errorMessage);
  }
}

export default LiveEncodingStatsEventDetails;

