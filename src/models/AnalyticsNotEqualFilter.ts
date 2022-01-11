import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsNotEqualFilter
 */
export class AnalyticsNotEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsNotEqualFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.NE;

  /**
   * @type {any}
   * @memberof AnalyticsNotEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsNotEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsNotEqualFilter;

