import {map} from '../common/Mapper';
import AnalyticsOperator from './AnalyticsOperator';

/**
 * @export
 * @class AnalyticsFilter
 */
export class AnalyticsFilter {
  constructor(obj: any) {
    this.name = map(obj.name);
    this.operator = map(obj.operator);
    this.value = map(obj.value);
  }

  /**
   * @type {string}
   * @memberof AnalyticsFilter
   */
  public name?: string;
  /**
   * @type {AnalyticsOperator}
   * @memberof AnalyticsFilter
   */
  public operator: AnalyticsOperator;
  /**
   * The value to compare to the property specified by the name
   * @type {string}
   * @memberof AnalyticsFilter
   */
  public value: string;
}

export default AnalyticsFilter;

