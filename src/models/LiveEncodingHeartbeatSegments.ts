import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatTotalProcessingOutlier from './LiveEncodingHeartbeatTotalProcessingOutlier';
import LiveEncodingHeartbeatTotalProcessingStatsMs from './LiveEncodingHeartbeatTotalProcessingStatsMs';
import LiveEncodingHeartbeatUploadOutlier from './LiveEncodingHeartbeatUploadOutlier';

/**
 * Segment processing statistics for a live encoding heartbeat.
 * @export
 * @class LiveEncodingHeartbeatSegments
 */
export class LiveEncodingHeartbeatSegments {
  /**
   * Aggregate statistics of per-segment total processing duration.
   * @type {LiveEncodingHeartbeatTotalProcessingStatsMs}
   * @memberof LiveEncodingHeartbeatSegments
   */
  public totalProcessingStatsMs?: LiveEncodingHeartbeatTotalProcessingStatsMs;

  /**
   * Last 20 per-muxing uploads whose duration exceeded the upload-outlier threshold.
   * @type {LiveEncodingHeartbeatUploadOutlier[]}
   * @memberof LiveEncodingHeartbeatSegments
   */
  public uploadOutliers?: LiveEncodingHeartbeatUploadOutlier[];

  /**
   * Last 20 segments whose total processing duration exceeded twice the rolling median.
   * @type {LiveEncodingHeartbeatTotalProcessingOutlier[]}
   * @memberof LiveEncodingHeartbeatSegments
   */
  public totalProcessingOutliers?: LiveEncodingHeartbeatTotalProcessingOutlier[];

  constructor(obj?: Partial<LiveEncodingHeartbeatSegments>) {
    if(!obj) {
      return;
    }
    this.totalProcessingStatsMs = map(obj.totalProcessingStatsMs, LiveEncodingHeartbeatTotalProcessingStatsMs);
    this.uploadOutliers = mapArray(obj.uploadOutliers, LiveEncodingHeartbeatUploadOutlier);
    this.totalProcessingOutliers = mapArray(obj.totalProcessingOutliers, LiveEncodingHeartbeatTotalProcessingOutlier);
  }
}

export default LiveEncodingHeartbeatSegments;

