import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsContainsFilter
 */
export class AdAnalyticsContainsFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsContainsFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsContainsFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsContainsFilter;

