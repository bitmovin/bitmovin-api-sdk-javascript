import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsLessThanOrEqualFilter
 */
export class AnalyticsLessThanOrEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsLessThanOrEqualFilter
   */
  public operator: AnalyticsQueryOperator.LTE = AnalyticsQueryOperator.LTE;

  /**
   * @type {any}
   * @memberof AnalyticsLessThanOrEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsLessThanOrEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsLessThanOrEqualFilter;

