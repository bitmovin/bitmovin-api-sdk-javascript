import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsInFilter
 */
export class AdAnalyticsInFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsInFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.IN;

  /**
   * @type {any[]}
   * @memberof AdAnalyticsInFilter
   */
  public value?: any[];

  constructor(obj?: Partial<AdAnalyticsInFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = mapArray(obj.value);
  }
}

export default AdAnalyticsInFilter;

