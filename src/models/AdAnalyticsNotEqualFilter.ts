import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsNotEqualFilter
 */
export class AdAnalyticsNotEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsNotEqualFilter
   */
  public operator: AnalyticsQueryOperator.NE = AnalyticsQueryOperator.NE;

  /**
   * @type {any}
   * @memberof AdAnalyticsNotEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsNotEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsNotEqualFilter;

