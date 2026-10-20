import {map, mapArray} from '../common/Mapper';

/**
 * A key event in the analyzed media, supported by one or more active observations
 * @export
 * @class AiSceneAnalysisLiveKeyMoment
 */
export class AiSceneAnalysisLiveKeyMoment {
  /**
   * Opaque key moment ID unique within the Live Analysis. Stable through refinements and never reused after withdrawal. (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveKeyMoment
   */
  public id?: string;

  /**
   * Result sequence that introduced or last changed this moment's importance level, times or observation references. Unchanged moments retain this value. (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveKeyMoment
   */
  public lastUpdatedSequence?: number;

  /**
   * Importance level, not a position within the result snapshot: 1 is highest and larger values indicate lower importance. Ties are allowed. Adding another moment does not by itself renumber existing importance levels. There is no upper bound or implied limit on the number of key moments. (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveKeyMoment
   */
  public importanceLevel?: number;

  /**
   * Start of the key moment in seconds (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveKeyMoment
   */
  public startInSeconds?: number;

  /**
   * End of the key moment in seconds (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveKeyMoment
   */
  public endInSeconds?: number;

  /**
   * Time of the key moment's actual high point in seconds (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveKeyMoment
   */
  public anchorInSeconds?: number;

  /**
   * IDs of active observations in the enclosing result that support this moment. Multiple key moments may reference the same observation. (required)
   * @type {string[]}
   * @memberof AiSceneAnalysisLiveKeyMoment
   */
  public observations?: string[];

  constructor(obj?: Partial<AiSceneAnalysisLiveKeyMoment>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.lastUpdatedSequence = map(obj.lastUpdatedSequence);
    this.importanceLevel = map(obj.importanceLevel);
    this.startInSeconds = map(obj.startInSeconds);
    this.endInSeconds = map(obj.endInSeconds);
    this.anchorInSeconds = map(obj.anchorInSeconds);
    this.observations = mapArray(obj.observations);
  }
}

export default AiSceneAnalysisLiveKeyMoment;

