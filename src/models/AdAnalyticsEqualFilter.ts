import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsEqualFilter
 */
export class AdAnalyticsEqualFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsEqualFilter;

