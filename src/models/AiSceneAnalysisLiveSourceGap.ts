import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisLiveSourceGapReason from './AiSceneAnalysisLiveSourceGapReason';

/**
 * @export
 * @class AiSceneAnalysisLiveSourceGap
 */
export class AiSceneAnalysisLiveSourceGap {
  /**
   * Gap start on the monotonic analysis timeline (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveSourceGap
   */
  public startTimeSeconds?: number;

  /**
   * Gap end on the monotonic analysis timeline (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveSourceGap
   */
  public endTimeSeconds?: number;

  /**
   * Reason for the source gap (required)
   * @type {AiSceneAnalysisLiveSourceGapReason}
   * @memberof AiSceneAnalysisLiveSourceGap
   */
  public reason?: AiSceneAnalysisLiveSourceGapReason;

  constructor(obj?: Partial<AiSceneAnalysisLiveSourceGap>) {
    if(!obj) {
      return;
    }
    this.startTimeSeconds = map(obj.startTimeSeconds);
    this.endTimeSeconds = map(obj.endTimeSeconds);
    this.reason = map(obj.reason);
  }
}

export default AiSceneAnalysisLiveSourceGap;

