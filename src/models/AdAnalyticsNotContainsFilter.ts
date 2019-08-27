import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsNotContainsFilter
 */
export class AdAnalyticsNotContainsFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsNotContainsFilter
   */
  public operator: 'NOTCONTAINS' = 'NOTCONTAINS';

  /**
   * @type {any}
   * @memberof AdAnalyticsNotContainsFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsNotContainsFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsNotContainsFilter;

