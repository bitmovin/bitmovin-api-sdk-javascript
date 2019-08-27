import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';

/**
 * @export
 * @class AdAnalyticsContainsFilter
 */
export class AdAnalyticsContainsFilter extends AdAnalyticsAbstractFilter {
  /**
   * Discriminator property for AdAnalyticsAbstractFilter
   * @type {string}
   * @memberof AdAnalyticsContainsFilter
   */
  public operator: 'CONTAINS' = 'CONTAINS';

  /**
   * @type {any}
   * @memberof AdAnalyticsContainsFilter
   */
  public value?: any;

  constructor(obj: Partial<AdAnalyticsContainsFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AdAnalyticsContainsFilter;

