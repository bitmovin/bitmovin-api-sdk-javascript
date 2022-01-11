import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsNotContainsFilter
 */
export class AdAnalyticsNotContainsFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsNotContainsFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.NOTCONTAINS;

  /**
   * @type {any}
   * @memberof AdAnalyticsNotContainsFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsNotContainsFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsNotContainsFilter;

