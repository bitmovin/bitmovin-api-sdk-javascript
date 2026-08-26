import {map, mapArray} from '../common/Mapper';
import SceneType from './SceneType';

/**
 * The scene segment that best matches a semantic-search query
 * @export
 * @class SceneAnalysisMatchingSegment
 */
export class SceneAnalysisMatchingSegment {
  /**
   * ID of the matching scene (required)
   * @type {string}
   * @memberof SceneAnalysisMatchingSegment
   */
  public sceneId?: string;

  /**
   * The detected type of the matching scene
   * @type {SceneType}
   * @memberof SceneAnalysisMatchingSegment
   */
  public sceneType?: SceneType;

  /**
   * The title of the matching scene
   * @type {string}
   * @memberof SceneAnalysisMatchingSegment
   */
  public sceneTitle?: string;

  /**
   * A description of the matching scene
   * @type {string}
   * @memberof SceneAnalysisMatchingSegment
   */
  public sceneDescription?: string;

  /**
   * The start time of the matching segment in seconds from the beginning of the video (required)
   * @type {number}
   * @memberof SceneAnalysisMatchingSegment
   */
  public startInSeconds?: number;

  /**
   * The end time of the matching segment in seconds from the beginning of the video (required)
   * @type {number}
   * @memberof SceneAnalysisMatchingSegment
   */
  public endInSeconds?: number;

  constructor(obj?: Partial<SceneAnalysisMatchingSegment>) {
    if(!obj) {
      return;
    }
    this.sceneId = map(obj.sceneId);
    this.sceneType = map(obj.sceneType);
    this.sceneTitle = map(obj.sceneTitle);
    this.sceneDescription = map(obj.sceneDescription);
    this.startInSeconds = map(obj.startInSeconds);
    this.endInSeconds = map(obj.endInSeconds);
  }
}

export default SceneAnalysisMatchingSegment;

