import {map, mapArray} from '../common/Mapper';

/**
 * A single segment whose total processing duration exceeded twice the rolling median.
 * @export
 * @class LiveEncodingHeartbeatTotalProcessingOutlier
 */
export class LiveEncodingHeartbeatTotalProcessingOutlier {
  /**
   * Output segment number this measurement belongs to.
   * @type {number}
   * @memberof LiveEncodingHeartbeatTotalProcessingOutlier
   */
  public segmentNumber?: number;

  /**
   * Total processing duration in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatTotalProcessingOutlier
   */
  public durationMs?: number;

  constructor(obj?: Partial<LiveEncodingHeartbeatTotalProcessingOutlier>) {
    if(!obj) {
      return;
    }
    this.segmentNumber = map(obj.segmentNumber);
    this.durationMs = map(obj.durationMs);
  }
}

export default LiveEncodingHeartbeatTotalProcessingOutlier;

