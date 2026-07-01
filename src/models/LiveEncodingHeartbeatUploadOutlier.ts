import {map, mapArray} from '../common/Mapper';

/**
 * A single per-muxing segment upload whose duration exceeded the upload-outlier threshold.
 * @export
 * @class LiveEncodingHeartbeatUploadOutlier
 */
export class LiveEncodingHeartbeatUploadOutlier {
  /**
   * Output segment number this upload belongs to.
   * @type {number}
   * @memberof LiveEncodingHeartbeatUploadOutlier
   */
  public segmentNumber?: number;

  /**
   * Identifier of the muxing whose upload was flagged.
   * @type {string}
   * @memberof LiveEncodingHeartbeatUploadOutlier
   */
  public encodingReferenceMuxingId?: string;

  /**
   * Upload duration in milliseconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatUploadOutlier
   */
  public durationMs?: number;

  constructor(obj?: Partial<LiveEncodingHeartbeatUploadOutlier>) {
    if(!obj) {
      return;
    }
    this.segmentNumber = map(obj.segmentNumber);
    this.encodingReferenceMuxingId = map(obj.encodingReferenceMuxingId);
    this.durationMs = map(obj.durationMs);
  }
}

export default LiveEncodingHeartbeatUploadOutlier;

