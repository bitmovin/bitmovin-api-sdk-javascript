import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsGreaterThanOrEqualFilter
 */
export class AnalyticsGreaterThanOrEqualFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsGreaterThanOrEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsGreaterThanOrEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsGreaterThanOrEqualFilter;

