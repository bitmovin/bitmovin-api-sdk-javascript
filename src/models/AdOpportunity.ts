import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AdOpportunity
 */
export class AdOpportunity {
  /**
   * Explanation of the scene boundary's suitability for an ad break, including low or zero suitability.
   * @type {string}
   * @memberof AdOpportunity
   */
  public reason?: string;

  /**
   * Suitability of placing an ad break at the end of the scene. Higher scores indicate greater suitability. A score of 0.5 can also mean that no assessment is available.
   * @type {number}
   * @memberof AdOpportunity
   */
  public score?: number;

  constructor(obj?: Partial<AdOpportunity>) {
    if(!obj) {
      return;
    }
    this.reason = map(obj.reason);
    this.score = map(obj.score);
  }
}

export default AdOpportunity;

