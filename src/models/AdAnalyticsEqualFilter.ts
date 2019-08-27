import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsEqualFilter
 */
export class AdAnalyticsEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsEqualFilter
   */
  public operator: 'EQ' = 'EQ';

  /**
   * @type {any}
   * @memberof AdAnalyticsEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsEqualFilter;

