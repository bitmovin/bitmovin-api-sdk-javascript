import {map, mapArray} from '../common/Mapper';
import Content from './Content';
import IABTaxonomy from './IABTaxonomy';
import SceneType from './SceneType';

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
  }
}

export default Scene;

