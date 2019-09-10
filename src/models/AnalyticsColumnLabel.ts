import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsColumnLabel
 */
export class AnalyticsColumnLabel {
  /**
   * @type {string}
   * @memberof AnalyticsColumnLabel
   */
  public key?: string;

  /**
   * @type {string}
   * @memberof AnalyticsColumnLabel
   */
  public label?: string;

  constructor(obj?: Partial<AnalyticsColumnLabel>) {
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
    this.label = map(obj.label);
  }
}

export default AnalyticsColumnLabel;

