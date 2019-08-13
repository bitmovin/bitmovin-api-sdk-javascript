import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsLessThanOrEqualFilter
 */
export class AnalyticsLessThanOrEqualFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsLessThanOrEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsLessThanOrEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsLessThanOrEqualFilter;

