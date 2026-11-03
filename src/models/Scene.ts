import {map, mapArray} from '../common/Mapper';
import AdOpportunity from './AdOpportunity';
import Content from './Content';
import IABTaxonomy from './IABTaxonomy';
import SceneType from './SceneType';
import Shot from './Shot';

/**
 * @export
 * @class Scene
 */
export class Scene {
  /**
   * Short AI-generated title describing the scene.
   * @type {string}
   * @memberof Scene
   */
  public title?: string;

  /**
   * Start time of the scene in seconds from the beginning of the video.
   * @type {number}
   * @memberof Scene
   */
  public startInSeconds?: number;

  /**
   * End time of the scene in seconds from the beginning of the video.
   * @type {number}
   * @memberof Scene
   */
  public endInSeconds?: number;

  /**
   * Identifier assigned to this scene within the analysis result.
   * @type {string}
   * @memberof Scene
   */
  public id?: string;

  /**
   * Structured description of this scene.
   * @type {Content}
   * @memberof Scene
   */
  public content?: Content;

  /**
   * Concise summary of the scene.
   * @type {string}
   * @memberof Scene
   */
  public summary?: string;

  /**
   * Detailed description of the scene, providing more context than summary.
   * @type {string}
   * @memberof Scene
   */
  public verboseSummary?: string;

  /**
   * Sensitive topics identified in this scene, expressed as free text rather than taxonomy identifiers. (required)
   * @type {string[]}
   * @memberof Scene
   */
  public sensitiveTopics?: string[];

  /**
   * Free-text keywords describing this scene. Preserve the returned spelling and case. (required)
   * @type {string[]}
   * @memberof Scene
   */
  public keywords?: string[];

  /**
   * IAB classification of this scene.
   * @type {IABTaxonomy}
   * @memberof Scene
   */
  public iab?: IABTaxonomy;

  /**
   * The detected type of scene based on content analysis
   * @type {SceneType}
   * @memberof Scene
   */
  public type?: SceneType;

  /**
   * Camera shots with available analysis associated with this scene. The list can be empty or omitted and need not include every shot.
   * @type {Shot[]}
   * @memberof Scene
   */
  public shots?: Shot[];

  /**
   * Suitability assessment for an ad break at the end of this scene. This does not confirm that an ad was placed.
   * @type {AdOpportunity}
   * @memberof Scene
   */
  public adOpportunityInformation?: AdOpportunity;

  constructor(obj?: Partial<Scene>) {
    if(!obj) {
      return;
    }
    this.title = map(obj.title);
    this.startInSeconds = map(obj.startInSeconds);
    this.endInSeconds = map(obj.endInSeconds);
    this.id = map(obj.id);
    this.content = map(obj.content, Content);
    this.summary = map(obj.summary);
    this.verboseSummary = map(obj.verboseSummary);
    this.sensitiveTopics = mapArray(obj.sensitiveTopics);
    this.keywords = mapArray(obj.keywords);
    this.iab = map(obj.iab, IABTaxonomy);
    this.type = map(obj.type);
    this.shots = mapArray(obj.shots, Shot);
    this.adOpportunityInformation = map(obj.adOpportunityInformation, AdOpportunity);
  }
}

export default Scene;

