import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisLiveKeyMoment from './AiSceneAnalysisLiveKeyMoment';
import AiSceneAnalysisLiveObservation from './AiSceneAnalysisLiveObservation';
import AiSceneAnalysisLiveResultMetadata from './AiSceneAnalysisLiveResultMetadata';
import AiSceneAnalysisLiveSourceGap from './AiSceneAnalysisLiveSourceGap';

/**
 * Complete snapshot of a Live Analysis at a specific result sequence
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
   * Monotonically increasing result sequence, starting at 1 (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveResult
   */
  public sequence?: number;

  /**
   * Time at which the AI analysis produced this result snapshot (required)
   * @type {Date}
   * @memberof AiSceneAnalysisLiveResult
   */
  public producedAt?: Date;

  /**
   * UTC presentation-clock time in Unix milliseconds corresponding to media time zero. This origin is fixed for the Live Analysis; coverage, observation, key-moment, and source-gap times remain relative to it. It is not the source capture time or result publication time. (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveResult
   */
  public mediaTimeOriginUnixMs?: number;

  /**
   * Whether this is the final result snapshot. This does not by itself imply that the Analysis completed successfully. (required)
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
   * Cumulative closed source gaps on the monotonic analysis timeline. An empty or omitted array means there are no closed source gaps in this snapshot, not that the previous collection is unchanged.
   * @type {AiSceneAnalysisLiveSourceGap[]}
   * @memberof AiSceneAnalysisLiveResult
   */
  public sourceGaps?: AiSceneAnalysisLiveSourceGap[];

  /**
   * Metadata for this result snapshot (required)
   * @type {AiSceneAnalysisLiveResultMetadata}
   * @memberof AiSceneAnalysisLiveResult
   */
  public metadata?: AiSceneAnalysisLiveResultMetadata;

  /**
   * Complete set of active observations for this result sequence. An empty or omitted array means there are no active observations in this snapshot, not that the previous collection is unchanged. Observations may be removed in later sequences. Observation IDs identify immutable observation content and are never reused. Each time range identifies the analyzed media window that produced the observation, not an exact event location.
   * @type {AiSceneAnalysisLiveObservation[]}
   * @memberof AiSceneAnalysisLiveResult
   */
  public observations?: AiSceneAnalysisLiveObservation[];

  /**
   * Complete set of current key moments for this result sequence, ordered by ascending startInSeconds. Ordering of moments with equal start times is unspecified. An empty or omitted array means there are no current key moments in this snapshot, not that the previous collection is unchanged.  Moments may be refined or withdrawn in later result sequences until the final result. A refined moment retains its ID; a withdrawn moment is absent from subsequent snapshots and its ID is never reused. Consumers identify moments by ID and detect changes through lastUpdatedSequence, not array position. Changing array position alone or marking the result final does not change lastUpdatedSequence.  Every referenced observation is active in the same result snapshot. Moment references are updated or moments withdrawn when supporting observations are replaced or removed. 
   * @type {AiSceneAnalysisLiveKeyMoment[]}
   * @memberof AiSceneAnalysisLiveResult
   */
  public keyMoments?: AiSceneAnalysisLiveKeyMoment[];

  constructor(obj?: Partial<AiSceneAnalysisLiveResult>) {
    if(!obj) {
      return;
    }
    this.analysisId = map(obj.analysisId);
    this.encodingId = map(obj.encodingId);
    this.sequence = map(obj.sequence);
    this.producedAt = map(obj.producedAt, Date);
    this.mediaTimeOriginUnixMs = map(obj.mediaTimeOriginUnixMs);
    this.isFinal = map(obj.isFinal);
    this.analyzedStartTimeSeconds = map(obj.analyzedStartTimeSeconds);
    this.analyzedEndTimeSeconds = map(obj.analyzedEndTimeSeconds);
    this.sourceGaps = mapArray(obj.sourceGaps, AiSceneAnalysisLiveSourceGap);
    this.metadata = map(obj.metadata, AiSceneAnalysisLiveResultMetadata);
    this.observations = mapArray(obj.observations, AiSceneAnalysisLiveObservation);
    this.keyMoments = mapArray(obj.keyMoments, AiSceneAnalysisLiveKeyMoment);
  }
}

export default AiSceneAnalysisLiveResult;

