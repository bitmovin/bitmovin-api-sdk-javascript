import {map, mapArray} from '../common/Mapper';
import DefaultManifestCondition from './DefaultManifestCondition';

/**
 * @export
 * @class DefaultDashManifestPeriod
 */
export class DefaultDashManifestPeriod {
  /**
   * List the encoding ids for which the conditions should apply
   * @type {string[]}
   * @memberof DefaultDashManifestPeriod
   */
  public encodingIds?: string[];

  /**
   * Adds an adaption set for every item to the period
   * @type {DefaultManifestCondition[]}
   * @memberof DefaultDashManifestPeriod
   */
  public adaptationSets?: DefaultManifestCondition[];

  constructor(obj?: Partial<DefaultDashManifestPeriod>) {
    if(!obj) {
      return;
    }
    this.encodingIds = mapArray(obj.encodingIds);
    this.adaptationSets = mapArray(obj.adaptationSets, DefaultManifestCondition);
  }
}

export default DefaultDashManifestPeriod;

