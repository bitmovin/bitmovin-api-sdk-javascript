import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

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
  public operator: 'LT' = 'LT';

  /**
   * @type {any}
   * @memberof AdAnalyticsLessThanFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsLessThanFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsLessThanFilter;

