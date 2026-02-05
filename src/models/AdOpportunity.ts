import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AdOpportunity
 */
export class AdOpportunity {
  /**
   * The reason why the scene was rated with a certain score
   * @type {string}
   * @memberof AdOpportunity
   */
  public reason?: string;

  /**
   * Score from 0.0 to 1.0 rating the ad placement suitability at the end of a scene based on content analysis
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

