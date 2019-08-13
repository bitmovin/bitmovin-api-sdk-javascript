import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsEqualFilter
 */
export class AnalyticsEqualFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsEqualFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsEqualFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsEqualFilter;

