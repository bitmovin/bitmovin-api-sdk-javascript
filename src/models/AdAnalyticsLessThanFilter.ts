import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsLessThanFilter
 */
export class AdAnalyticsLessThanFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsLessThanFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.LT;

  /**
   * @type {any}
   * @memberof AdAnalyticsLessThanFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsLessThanFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsLessThanFilter;

