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
  public version?: string;

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
    this.version = map(obj.version);
    this.contentTaxonomies = mapArray(obj.contentTaxonomies);
    this.adOpportunityTaxonomies = mapArray(obj.adOpportunityTaxonomies);
    this.sensitiveTopicTaxonomies = mapArray(obj.sensitiveTopicTaxonomies);
  }
}

export default IABTaxonomy;

