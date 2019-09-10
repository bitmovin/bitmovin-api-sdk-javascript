import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsGreaterThanOrEqualFilter
 */
export class AdAnalyticsGreaterThanOrEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsGreaterThanOrEqualFilter
   */
  public operator: AnalyticsQueryOperator.GTE = AnalyticsQueryOperator.GTE;

  /**
   * @type {any}
   * @memberof AdAnalyticsGreaterThanOrEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsGreaterThanOrEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsGreaterThanOrEqualFilter;

