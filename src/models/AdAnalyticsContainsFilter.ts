import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsQueryOperator from './AnalyticsQueryOperator';

/**
 * @export
 * @class AdAnalyticsContainsFilter
 */
export class AdAnalyticsContainsFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsContainsFilter
   */
  public readonly operator: AnalyticsQueryOperator = AnalyticsQueryOperator.CONTAINS;

  /**
   * @type {any}
   * @memberof AdAnalyticsContainsFilter
   */
  public value?: any;

  constructor(obj?: Partial<AdAnalyticsContainsFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AdAnalyticsContainsFilter;

