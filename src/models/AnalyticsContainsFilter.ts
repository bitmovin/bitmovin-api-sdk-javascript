import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsContainsFilter
 */
export class AnalyticsContainsFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsContainsFilter
   */
  public operator: AnalyticsQueryOperator.CONTAINS = AnalyticsQueryOperator.CONTAINS;

  /**
   * @type {any}
   * @memberof AnalyticsContainsFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsContainsFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsContainsFilter;

