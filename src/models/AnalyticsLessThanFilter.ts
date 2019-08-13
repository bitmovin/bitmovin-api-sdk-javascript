import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsLessThanFilter
 */
export class AnalyticsLessThanFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsLessThanFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsLessThanFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsLessThanFilter;

