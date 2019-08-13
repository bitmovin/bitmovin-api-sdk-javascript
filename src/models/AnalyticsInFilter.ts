import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsInFilter
 */
export class AnalyticsInFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any[]}
   * @memberof AnalyticsInFilter
   */
  public value: any[];

  constructor(obj: Partial<AnalyticsInFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsInFilter;

