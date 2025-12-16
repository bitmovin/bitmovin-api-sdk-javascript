import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class IABTaxonomy
 */
export class IABTaxonomy {
  /**
   * @type {string}
   * @memberof IABTaxonomy
   */
  public contentVersion?: string;

  /**
   * @type {string}
   * @memberof IABTaxonomy
   */
  public adProductVersion?: string;

  /**
   * @type {string[]}
   * @memberof IABTaxonomy
   */
  public contentTaxonomies?: string[];

  /**
   * @type {string[]}
   * @memberof IABTaxonomy
   */
  public adOpportunityTaxonomies?: string[];

  /**
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

