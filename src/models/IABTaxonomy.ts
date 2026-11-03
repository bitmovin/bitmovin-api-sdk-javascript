import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class IABTaxonomy
 */
export class IABTaxonomy {
  /**
   * Version of the IAB Content Taxonomy used for contentTaxonomies and sensitiveTopicTaxonomies.
   * @type {string}
   * @memberof IABTaxonomy
   */
  public contentVersion?: string;

  /**
   * Version of the IAB Ad Product Taxonomy used for adOpportunityTaxonomies.
   * @type {string}
   * @memberof IABTaxonomy
   */
  public adProductVersion?: string;

  /**
   * IAB Content Taxonomy identifiers describing the scene's subject matter. Values are identifiers, not category names. (required)
   * @type {string[]}
   * @memberof IABTaxonomy
   */
  public contentTaxonomies?: string[];

  /**
   * IAB Ad Product Taxonomy identifiers describing advertising categories relevant to this scene. Values are identifiers, not category names. (required)
   * @type {string[]}
   * @memberof IABTaxonomy
   */
  public adOpportunityTaxonomies?: string[];

  /**
   * IAB Content Taxonomy identifiers for sensitive topics associated with this scene. Values are identifiers, not category names. (required)
   * @type {string[]}
   * @memberof IABTaxonomy
   */
  public sensitiveTopicTaxonomies?: string[];

  constructor(obj?: Partial<IABTaxonomy>) {
    if(!obj) {
      return;
    }
    this.contentVersion = map(obj.contentVersion);
    this.adProductVersion = map(obj.adProductVersion);
    this.contentTaxonomies = mapArray(obj.contentTaxonomies);
    this.adOpportunityTaxonomies = mapArray(obj.adOpportunityTaxonomies);
    this.sensitiveTopicTaxonomies = mapArray(obj.sensitiveTopicTaxonomies);
  }
}

export default IABTaxonomy;

