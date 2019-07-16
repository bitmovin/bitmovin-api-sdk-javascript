import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsBaseFilter
 */
export class AnalyticsBaseFilter {
  /**
   * @type {string}
   * @memberof AnalyticsBaseFilter
   */
  public name: string;

  /**
   * @type {string}
   * @memberof AnalyticsBaseFilter
   */
  public operator: string;

  constructor(obj: Partial<AnalyticsBaseFilter>) {
    this.name = map(obj.name);
    this.operator = map(obj.operator);
  }
}

export default AnalyticsBaseFilter;

