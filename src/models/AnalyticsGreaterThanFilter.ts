import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsGreaterThanFilter
 */
export class AnalyticsGreaterThanFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsGreaterThanFilter
   */
  public operator: AnalyticsQueryOperator.GT = AnalyticsQueryOperator.GT;

  /**
   * @type {any}
   * @memberof AnalyticsGreaterThanFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsGreaterThanFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsGreaterThanFilter;

