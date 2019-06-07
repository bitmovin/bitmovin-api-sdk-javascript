import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsColumnLabel
 */
export class AnalyticsColumnLabel {
  constructor(obj: any) {
    this.key = map(obj.key);
    this.label = map(obj.label);
  }

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
}

export default AnalyticsColumnLabel;

