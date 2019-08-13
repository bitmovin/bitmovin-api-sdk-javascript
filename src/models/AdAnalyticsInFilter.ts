import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsInFilter
 */
export class AdAnalyticsInFilter extends AdAnalyticsAbstractFilter {
  /**
   * @type {any[]}
   * @memberof AdAnalyticsInFilter
   */
  public value: any[];

  constructor(obj: Partial<AdAnalyticsInFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AdAnalyticsInFilter;

