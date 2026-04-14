import {map, mapArray} from '../common/Mapper';
import Metadata from './Metadata';
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
   * @type {number}
   * @memberof SceneAnalysisDetailsResponse
   */
  public duration?: number;

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

  /**
   * @type {string[]}
   * @memberof SceneAnalysisDetailsResponse
   */
  public inputLanguageCodes?: string[];

  /**
   * @type {Metadata}
   * @memberof SceneAnalysisDetailsResponse
   */
  public metadata?: Metadata;

  constructor(obj?: Partial<SceneAnalysisDetailsResponse>) {
    if(!obj) {
      return;
    }
    this.scenes = mapArray(obj.scenes, Scene);
    this.duration = map(obj.duration);
    this.description = map(obj.description);
    this.keywords = mapArray(obj.keywords);
    this.ratings = mapArray(obj.ratings, Rating);
    this.sensitiveTopics = mapArray(obj.sensitiveTopics);
    this.iabSensitiveTopicTaxonomies = mapArray(obj.iabSensitiveTopicTaxonomies);
    this.inputLanguageCodes = mapArray(obj.inputLanguageCodes);
    this.metadata = map(obj.metadata, Metadata);
  }
}

export default SceneAnalysisDetailsResponse;

