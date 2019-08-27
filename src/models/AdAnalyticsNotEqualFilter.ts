import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsNotEqualFilter
 */
export class AdAnalyticsNotEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsNotEqualFilter
   */
  public operator: 'NE' = 'NE';

  /**
   * @type {any}
   * @memberof AdAnalyticsNotEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsNotEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsNotEqualFilter;

