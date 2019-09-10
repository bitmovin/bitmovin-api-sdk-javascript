import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsEqualFilter
 */
export class AdAnalyticsEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsEqualFilter
   */
  public operator: AnalyticsQueryOperator.EQ = AnalyticsQueryOperator.EQ;

  /**
   * @type {any}
   * @memberof AdAnalyticsEqualFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsEqualFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsEqualFilter;

