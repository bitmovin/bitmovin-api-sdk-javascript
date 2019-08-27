import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsGreaterThanOrEqualFilter
 */
export class AnalyticsGreaterThanOrEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsGreaterThanOrEqualFilter
   */
  public operator: 'GTE' = 'GTE';

  /**
   * @type {any}
   * @memberof AnalyticsGreaterThanOrEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsGreaterThanOrEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsGreaterThanOrEqualFilter;

