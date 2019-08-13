import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsLessThanFilter
 */
export class AdAnalyticsLessThanFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AdAnalyticsLessThanFilter
   */
  public value: any;

  constructor(obj: Partial<AdAnalyticsLessThanFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsLessThanFilter;

