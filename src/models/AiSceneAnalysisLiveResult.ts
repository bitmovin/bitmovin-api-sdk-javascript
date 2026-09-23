import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisLiveObservation from './AiSceneAnalysisLiveObservation';
import AiSceneAnalysisLiveResultMetadata from './AiSceneAnalysisLiveResultMetadata';
import AiSceneAnalysisLiveSourceGap from './AiSceneAnalysisLiveSourceGap';

/**
 * Cumulative immutable result generation for a Live Analysis
 * @export
 * @class AiSceneAnalysisLiveResult
 */
export class AiSceneAnalysisLiveResult {
  /**
   * ID of the Live Analysis resource (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveResult
   */
  public analysisId?: string;

  /**
   * ID of the Encoding associated with the Analysis (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveResult
   */
  public encodingId?: string;

  /**
   * Monotonically increasing generation sequence, starting at 1 (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveResult
   */
  public sequence?: number;

  /**
   * Time at which the AI analysis produced this result generation (required)
   * @type {Date}
   * @memberof AiSceneAnalysisLiveResult
   */
  public producedAt?: Date;

  /**
   * Whether AI analysis produced this as the final result generation. This does not by itself imply that the Analysis completed successfully. (required)
   * @type {boolean}
   * @memberof AiSceneAnalysisLiveResult
   */
  public isFinal?: boolean;

  /**
   * Start of cumulative analyzed coverage on the monotonic analysis timeline (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveResult
   */
  public analyzedStartTimeSeconds?: number;

  /**
   * End of cumulative analyzed coverage on the monotonic analysis timeline (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveResult
   */
  public analyzedEndTimeSeconds?: number;

  /**
   * Cumulative closed source gaps on the monotonic analysis timeline (required)
   * @type {AiSceneAnalysisLiveSourceGap[]}
   * @memberof AiSceneAnalysisLiveResult
   */
  public sourceGaps?: AiSceneAnalysisLiveSourceGap[];

  /**
   * Producer metadata for this generation (required)
   * @type {AiSceneAnalysisLiveResultMetadata}
   * @memberof AiSceneAnalysisLiveResult
   */
  public metadata?: AiSceneAnalysisLiveResultMetadata;

  /**
   * Cumulative immutable observations. Existing observations retain the same ID and content across later generations. Each time range identifies the analyzed media window that produced the observation, not an exact event location. (required)
   * @type {AiSceneAnalysisLiveObservation[]}
   * @memberof AiSceneAnalysisLiveResult
   */
  public observations?: AiSceneAnalysisLiveObservation[];

  constructor(obj?: Partial<AiSceneAnalysisLiveResult>) {
    if(!obj) {
      return;
    }
    this.analysisId = map(obj.analysisId);
    this.encodingId = map(obj.encodingId);
    this.sequence = map(obj.sequence);
    this.producedAt = map(obj.producedAt, Date);
    this.isFinal = map(obj.isFinal);
    this.analyzedStartTimeSeconds = map(obj.analyzedStartTimeSeconds);
    this.analyzedEndTimeSeconds = map(obj.analyzedEndTimeSeconds);
    this.sourceGaps = mapArray(obj.sourceGaps, AiSceneAnalysisLiveSourceGap);
    this.metadata = map(obj.metadata, AiSceneAnalysisLiveResultMetadata);
    this.observations = mapArray(obj.observations, AiSceneAnalysisLiveObservation);
  }
}

export default AiSceneAnalysisLiveResult;

