import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class ResetLiveManifestTimeShift
 */
export class ResetLiveManifestTimeShift extends BitmovinResponse {
  /**
   * Specifies how many seconds of content remain in the manifest after older segments are removed. At least one segment is always retained. If neither `residualPeriodInSeconds` nor `offsetInSeconds` is set, all segments except the most recent are removed. For DASH manifests that use SegmentTemplate, the retained duration also includes the value configured for `liveEdgeOffset`. 
   * @type {number}
   * @memberof ResetLiveManifestTimeShift
   */
  public residualPeriodInSeconds?: number;

  /**
   * Specifies an offset, in seconds, from the start of the live event. All segments before this position are removed from the affected manifests. For example, assume a segment length of 2 seconds and a configured `timeshift` of 120 seconds (2 minutes). If the most recent segment is `segment_80.ts`, the manifest contains 60 segments, from `segment_21.ts` through `segment_80.ts`. Setting `offsetInSeconds` to `120` sets the target segment number to 60 (`targetSegmentNumber = offsetInSeconds / segmentLength`). All segments before `segment_60.ts` are removed. Each affected manifest then contains `segment_60.ts` through `segment_80.ts`.  *Note:* Do not set both `offsetInSeconds` and `residualPeriodInSeconds`. 
   * @type {number}
   * @memberof ResetLiveManifestTimeShift
   */
  public offsetInSeconds?: number;

  /**
   * The IDs of the manifests to update. If omitted, all supported manifests associated with the encoding are updated. HLS live manifests are supported. DASH live manifests require encoder version 2.235.0 or later.
   * @type {string[]}
   * @memberof ResetLiveManifestTimeShift
   */
  public manifestIds?: string[];

  /**
   * If set to true, the Progressive muxing start position will be shifted to the start of the first remaining segment after the removal.  NOTE: This only works for Progressive MP4 muxings.
   * @type {boolean}
   * @memberof ResetLiveManifestTimeShift
   */
  public shiftProgressiveMuxingStartPosition?: boolean;

  constructor(obj?: Partial<ResetLiveManifestTimeShift>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.residualPeriodInSeconds = map(obj.residualPeriodInSeconds);
    this.offsetInSeconds = map(obj.offsetInSeconds);
    this.manifestIds = mapArray(obj.manifestIds);
    this.shiftProgressiveMuxingStartPosition = map(obj.shiftProgressiveMuxingStartPosition);
  }
}

export default ResetLiveManifestTimeShift;

