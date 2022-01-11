import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsNotContainsFilter
 */
export class AnalyticsNotContainsFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsNotContainsFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.NOTCONTAINS;

  /**
   * @type {any}
   * @memberof AnalyticsNotContainsFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsNotContainsFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsNotContainsFilter;

