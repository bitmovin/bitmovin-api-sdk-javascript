import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsInFilter
 */
export class AdAnalyticsInFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsInFilter
   */
  public operator: 'IN' = 'IN';

  /**
   * @type {any[]}
   * @memberof AdAnalyticsInFilter
   */
  public value?: any[];

  constructor(obj: Partial<AdAnalyticsInFilter>) {
    super(obj);

    this.value = obj.value || [];
  }
}

export default AdAnalyticsInFilter;

