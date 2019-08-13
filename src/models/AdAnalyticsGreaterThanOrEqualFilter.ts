import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsGreaterThanOrEqualFilter
 */
export class AdAnalyticsGreaterThanOrEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsGreaterThanOrEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsGreaterThanOrEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsGreaterThanOrEqualFilter;

