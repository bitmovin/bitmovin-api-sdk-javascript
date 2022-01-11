import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsGreaterThanFilter
 */
export class AdAnalyticsGreaterThanFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsGreaterThanFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.GT;

  /**
   * @type {any}
   * @memberof AdAnalyticsGreaterThanFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsGreaterThanFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsGreaterThanFilter;

