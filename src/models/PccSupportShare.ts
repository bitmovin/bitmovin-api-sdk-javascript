import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccSupportShare
 */
export class PccSupportShare {
  /**
   * What this share counts, in words rather than in codes. (required)
   * @type {string}
   * @memberof PccSupportShare
   */
  public label?: string;

  /**
   * Device pools that played it. (required)
   * @type {number}
   * @memberof PccSupportShare
   */
  public played?: number;

  /**
   * Device pools that answered either way. The denominator, never the fleet size. (required)
   * @type {number}
   * @memberof PccSupportShare
   */
  public measured?: number;

  constructor(obj?: Partial<PccSupportShare>) {
    if(!obj) {
      return;
    }
    this.label = map(obj.label);
    this.played = map(obj.played);
    this.measured = map(obj.measured);
  }
}

export default PccSupportShare;

