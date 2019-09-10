import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsGreaterThanOrEqualFilter
 */
export class AnalyticsGreaterThanOrEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsGreaterThanOrEqualFilter
   */
  public operator: AnalyticsQueryOperator.GTE = AnalyticsQueryOperator.GTE;

  /**
   * @type {any}
   * @memberof AnalyticsGreaterThanOrEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsGreaterThanOrEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsGreaterThanOrEqualFilter;

