import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsNotEqualFilter
 */
export class AnalyticsNotEqualFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsNotEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsNotEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsNotEqualFilter;

