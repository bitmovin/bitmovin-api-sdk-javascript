import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsLessThanOrEqualFilter
 */
export class AnalyticsLessThanOrEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsLessThanOrEqualFilter
   */
  public operator: 'LTE' = 'LTE';

  /**
   * @type {any}
   * @memberof AnalyticsLessThanOrEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsLessThanOrEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsLessThanOrEqualFilter;

