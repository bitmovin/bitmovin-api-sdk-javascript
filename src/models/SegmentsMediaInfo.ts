import {map} from '../common/Mapper';
import BasicMediaInfo from './BasicMediaInfo';

/**
 * @export
 * @class SegmentsMediaInfo
 */
export class SegmentsMediaInfo extends BasicMediaInfo {
  /**
   * Path to segments. (required)
   * @type {string}
   * @memberof SegmentsMediaInfo
   */
  public segmentPath: string;

  /**
   * Id of the encoding. (required)
   * @type {string}
   * @memberof SegmentsMediaInfo
   */
  public encodingId: string;

  /**
   * Id of the stream. (required)
   * @type {string}
   * @memberof SegmentsMediaInfo
   */
  public streamId: string;

  /**
   * Id of the muxing. (required)
   * @type {string}
   * @memberof SegmentsMediaInfo
   */
  public muxingId: string;

  /**
   * Id of the DRM.
   * @type {string}
   * @memberof SegmentsMediaInfo
   */
  public drmId?: string;

  /**
   * Number of the first segment. Default is 0.
   * @type {number}
   * @memberof SegmentsMediaInfo
   */
  public startSegmentNumber?: number;

  /**
   * Number of the last segment. Default is the last one that was encoded.
   * @type {number}
   * @memberof SegmentsMediaInfo
   */
  public endSegmentNumber?: number;

  constructor(obj: Partial<SegmentsMediaInfo>) {
    super(obj);
    this.segmentPath = map(obj.segmentPath);
    this.encodingId = map(obj.encodingId);
    this.streamId = map(obj.streamId);
    this.muxingId = map(obj.muxingId);
    this.drmId = map(obj.drmId);
    this.startSegmentNumber = map(obj.startSegmentNumber);
    this.endSegmentNumber = map(obj.endSegmentNumber);
  }
}

export default SegmentsMediaInfo;

