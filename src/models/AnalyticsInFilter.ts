import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsInFilter
 */
export class AnalyticsInFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsInFilter
   */
  public operator: AnalyticsQueryOperator.IN = AnalyticsQueryOperator.IN;

  /**
   * @type {any[]}
   * @memberof AnalyticsInFilter
   */
  public value?: any[];

  constructor(obj?: Partial<AnalyticsInFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = mapArray(obj.value);
  }
}

export default AnalyticsInFilter;

