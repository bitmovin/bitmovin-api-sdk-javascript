import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsEqualFilter
 */
export class AnalyticsEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsEqualFilter
   */
  public operator: AnalyticsQueryOperator.EQ = AnalyticsQueryOperator.EQ;

  /**
   * @type {any}
   * @memberof AnalyticsEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsEqualFilter;

