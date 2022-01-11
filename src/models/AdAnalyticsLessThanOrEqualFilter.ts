import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsLessThanOrEqualFilter
 */
export class AdAnalyticsLessThanOrEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsLessThanOrEqualFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.LTE;

  /**
   * @type {any}
   * @memberof AdAnalyticsLessThanOrEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsLessThanOrEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsLessThanOrEqualFilter;

