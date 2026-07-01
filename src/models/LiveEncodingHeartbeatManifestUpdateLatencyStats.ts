import {map, mapArray} from '../common/Mapper';

/**
 * Aggregate statistics of HLS manifest update latencies.
 * @export
 * @class LiveEncodingHeartbeatManifestUpdateLatencyStats
 */
export class LiveEncodingHeartbeatManifestUpdateLatencyStats {
  /**
   * Mean manifest update latency in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatManifestUpdateLatencyStats
   */
  public mean?: number;

  /**
   * Median manifest update latency in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatManifestUpdateLatencyStats
   */
  public median?: number;

  /**
   * Minimum manifest update latency in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatManifestUpdateLatencyStats
   */
  public min?: number;

  /**
   * Maximum manifest update latency in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatManifestUpdateLatencyStats
   */
  public max?: number;

  constructor(obj?: Partial<LiveEncodingHeartbeatManifestUpdateLatencyStats>) {
    if(!obj) {
      return;
    }
    this.mean = map(obj.mean);
    this.median = map(obj.median);
    this.min = map(obj.min);
    this.max = map(obj.max);
  }
}

export default LiveEncodingHeartbeatManifestUpdateLatencyStats;

