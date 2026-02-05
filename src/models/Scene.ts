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
   * @type {string}
   * @memberof Scene
   */
  public title?: string;

  /**
   * @type {number}
   * @memberof Scene
   */
  public startInSeconds?: number;

  /**
   * @type {number}
   * @memberof Scene
   */
  public endInSeconds?: number;

  /**
   * @type {string}
   * @memberof Scene
   */
  public id?: string;

  /**
   * @type {Content}
   * @memberof Scene
   */
  public content?: Content;

  /**
   * @type {string}
   * @memberof Scene
   */
  public summary?: string;

  /**
   * @type {string}
   * @memberof Scene
   */
  public verboseSummary?: string;

  /**
   * @type {string[]}
   * @memberof Scene
   */
  public sensitiveTopics?: string[];

  /**
   * @type {string[]}
   * @memberof Scene
   */
  public keywords?: string[];

  /**
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
   * A detailed breakdown of individual camera shots within this scene, providing granular analysis of visual content and subjects
   * @type {Shot[]}
   * @memberof Scene
   */
  public shots?: Shot[];

  /**
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

