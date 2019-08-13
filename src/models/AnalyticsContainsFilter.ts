import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsContainsFilter
 */
export class AnalyticsContainsFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsContainsFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsContainsFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsContainsFilter;

