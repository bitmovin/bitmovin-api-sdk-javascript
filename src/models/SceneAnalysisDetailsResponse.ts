import {map, mapArray} from '../common/Mapper';
import Rating from './Rating';
import Scene from './Scene';

/**
 * @export
 * @class SceneAnalysisDetailsResponse
 */
export class SceneAnalysisDetailsResponse {
  /**
   * @type {Scene[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public scenes?: Scene[];

  /**
   * @type {string}
   * @memberof SceneAnalysisDetailsResponse
   */
  public description?: string;

  /**
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public keywords?: string[];

  /**
   * @type {Rating[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public ratings?: Rating[];

  /**
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public sensitiveTopics?: string[];

  /**
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public iabSensitiveTopicTaxonomies?: string[];

  constructor(obj?: Partial<SceneAnalysisDetailsResponse>) {
    if(!obj) {
      return;
    }
    this.scenes = mapArray(obj.scenes, Scene);
    this.description = map(obj.description);
    this.keywords = mapArray(obj.keywords);
    this.ratings = mapArray(obj.ratings, Rating);
    this.sensitiveTopics = mapArray(obj.sensitiveTopics);
    this.iabSensitiveTopicTaxonomies = mapArray(obj.iabSensitiveTopicTaxonomies);
  }
}

export default SceneAnalysisDetailsResponse;

