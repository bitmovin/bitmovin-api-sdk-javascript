import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsNotEqualFilter
 */
export class AnalyticsNotEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsNotEqualFilter
   */
  public operator: 'NE' = 'NE';

  /**
   * @type {any}
   * @memberof AnalyticsNotEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsNotEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsNotEqualFilter;

