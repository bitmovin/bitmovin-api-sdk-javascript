import {map} from '../common/Mapper';

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

  constructor(obj: Partial<AnalyticsColumnLabel>) {

    this.key = obj.key;
    this.label = obj.label;
  }
}

export default AnalyticsColumnLabel;

