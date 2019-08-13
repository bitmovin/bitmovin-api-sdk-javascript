import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsNotEqualFilter
 */
export class AdAnalyticsNotEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsNotEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsNotEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsNotEqualFilter;

