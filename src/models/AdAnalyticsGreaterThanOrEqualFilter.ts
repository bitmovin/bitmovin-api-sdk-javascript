import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsGreaterThanOrEqualFilter
 */
export class AdAnalyticsGreaterThanOrEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsGreaterThanOrEqualFilter
   */
  public operator: 'GTE' = 'GTE';

  /**
   * @type {any}
   * @memberof AdAnalyticsGreaterThanOrEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsGreaterThanOrEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsGreaterThanOrEqualFilter;

