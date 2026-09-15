import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccHdrFinding
 */
export class PccHdrFinding {
  /**
   * The device pool, under the name the rest of the report shows it by. (required)
   * @type {string}
   * @memberof PccHdrFinding
   */
  public device?: string;

  /**
   * @type {string}
   * @memberof PccHdrFinding
   */
  public codec?: string;

  /**
   * @type {string}
   * @memberof PccHdrFinding
   */
  public protection?: string;

  /**
   * What was found, in one paragraph. (required)
   * @type {string}
   * @memberof PccHdrFinding
   */
  public sentence?: string;

  constructor(obj?: Partial<PccHdrFinding>) {
    if(!obj) {
      return;
    }
    this.device = map(obj.device);
    this.codec = map(obj.codec);
    this.protection = map(obj.protection);
    this.sentence = map(obj.sentence);
  }
}

export default PccHdrFinding;

