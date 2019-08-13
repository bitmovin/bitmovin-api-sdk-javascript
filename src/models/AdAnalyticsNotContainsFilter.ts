import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsNotContainsFilter
 */
export class AdAnalyticsNotContainsFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsNotContainsFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsNotContainsFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsNotContainsFilter;

