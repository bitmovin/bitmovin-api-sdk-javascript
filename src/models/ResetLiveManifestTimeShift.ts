import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class ResetLiveManifestTimeShift
 */
export class ResetLiveManifestTimeShift extends BitmovinResponse {
  /**
   * Determines how many seconds will be left in the manifest after segments are removed. If this is not set, all but one segment will be removed. 
   * @type {number}
   * @memberof ResetLiveManifestTimeShift
   */
  public residualPeriodInSeconds?: number;

  /**
   * The ids of the manifests to update. If this property is not set, all manifests tied to the encoding are updated.
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
    this.manifestIds = mapArray(obj.manifestIds);
    this.shiftProgressiveMuxingStartPosition = map(obj.shiftProgressiveMuxingStartPosition);
  }
}

export default ResetLiveManifestTimeShift;

