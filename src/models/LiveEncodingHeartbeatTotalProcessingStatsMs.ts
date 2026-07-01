import {map, mapArray} from '../common/Mapper';

/**
 * Aggregate statistics of per-segment total processing duration over a rolling window of completed segments.
 * @export
 * @class LiveEncodingHeartbeatTotalProcessingStatsMs
 */
export class LiveEncodingHeartbeatTotalProcessingStatsMs {
  /**
   * Minimum total processing duration in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatTotalProcessingStatsMs
   */
  public min?: number;

  /**
   * Maximum total processing duration in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatTotalProcessingStatsMs
   */
  public max?: number;

  /**
   * Mean total processing duration in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatTotalProcessingStatsMs
   */
  public mean?: number;

  /**
   * Median total processing duration in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatTotalProcessingStatsMs
   */
  public median?: number;

  constructor(obj?: Partial<LiveEncodingHeartbeatTotalProcessingStatsMs>) {
    if(!obj) {
      return;
    }
    this.min = map(obj.min);
    this.max = map(obj.max);
    this.mean = map(obj.mean);
    this.median = map(obj.median);
  }
}

export default LiveEncodingHeartbeatTotalProcessingStatsMs;

