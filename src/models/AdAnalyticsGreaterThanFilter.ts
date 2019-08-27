import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

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
  public operator: 'GT' = 'GT';

  /**
   * @type {any}
   * @memberof AdAnalyticsGreaterThanFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsGreaterThanFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsGreaterThanFilter;

