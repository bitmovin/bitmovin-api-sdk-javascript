import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsLessThanOrEqualFilter
 */
export class AdAnalyticsLessThanOrEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsLessThanOrEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsLessThanOrEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsLessThanOrEqualFilter;

