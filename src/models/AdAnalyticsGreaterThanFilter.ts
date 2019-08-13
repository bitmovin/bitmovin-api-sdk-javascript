import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsGreaterThanFilter
 */
export class AdAnalyticsGreaterThanFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsGreaterThanFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsGreaterThanFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsGreaterThanFilter;

