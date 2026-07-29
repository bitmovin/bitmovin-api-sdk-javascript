import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SceneAnalysisListItem
 */
export class SceneAnalysisListItem {
  /**
   * AI scene analysis ID (required)
   * @type {string}
   * @memberof SceneAnalysisListItem
   */
  public id?: string;

  /**
   * ID of the associated encoding (required)
   * @type {string}
   * @memberof SceneAnalysisListItem
   */
  public encodingId?: string;

  /**
   * Creation timestamp, returned as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof SceneAnalysisListItem
   */
  public createdAt?: Date;

  /**
   * Analysis description. Empty when analysis metadata is unavailable (required)
   * @type {string}
   * @memberof SceneAnalysisListItem
   */
  public description?: string;

  /**
   * Inferred title representing the analyzed content as a whole. If omitted or null, the title is not available.
   * @type {string}
   * @memberof SceneAnalysisListItem
   */
  public title?: string;

  /**
   * Analysis keywords in their original order and casing, including duplicates. Omitted or empty when analysis metadata is unavailable; consumers must treat both representations as an empty list
   * @type {string[]}
   * @memberof SceneAnalysisListItem
   */
  public keywords?: string[];

  /**
   * Number of scenes in the analysis. Zero when analysis metadata is unavailable (required)
   * @type {number}
   * @memberof SceneAnalysisListItem
   */
  public sceneCount?: number;

  /**
   * Unique language codes for available translated analysis details in backend-defined deterministic order. Order and casing are returned unchanged. Omitted or empty when no translations are available; consumers must treat both representations as an empty list
   * @type {string[]}
   * @memberof SceneAnalysisListItem
   */
  public outputLanguageCodes?: string[];

  constructor(obj?: Partial<SceneAnalysisListItem>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.encodingId = map(obj.encodingId);
    this.createdAt = map(obj.createdAt, Date);
    this.description = map(obj.description);
    this.title = map(obj.title);
    this.keywords = mapArray(obj.keywords);
    this.sceneCount = map(obj.sceneCount);
    this.outputLanguageCodes = mapArray(obj.outputLanguageCodes);
  }
}

export default SceneAnalysisListItem;

