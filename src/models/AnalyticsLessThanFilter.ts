import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AnalyticsLessThanFilter
 */
export class AnalyticsLessThanFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsLessThanFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.LT;

  /**
   * @type {any}
   * @memberof AnalyticsLessThanFilter
   */
  public value?: any;

  constructor(obj?: Partial<AnalyticsLessThanFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AnalyticsLessThanFilter;

