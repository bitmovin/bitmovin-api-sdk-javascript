import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsGreaterThanFilter
 */
export class AnalyticsGreaterThanFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsGreaterThanFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsGreaterThanFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsGreaterThanFilter;

