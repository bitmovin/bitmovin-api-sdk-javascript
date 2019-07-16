import {map} from '../common/Mapper';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';

/**
 * @export
 * @class AnalyticsFilter
 */
export class AnalyticsFilter extends AnalyticsBaseFilter {
  /**
   * @type {any}
   * @memberof AnalyticsFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsFilter;

