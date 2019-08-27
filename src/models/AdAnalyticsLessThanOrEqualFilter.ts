import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

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
  public operator: 'LTE' = 'LTE';

  /**
   * @type {any}
   * @memberof AdAnalyticsLessThanOrEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsLessThanOrEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsLessThanOrEqualFilter;

