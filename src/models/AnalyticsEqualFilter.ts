import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsEqualFilter
 */
export class AnalyticsEqualFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsEqualFilter
   */
  public operator: 'EQ' = 'EQ';

  /**
   * @type {any}
   * @memberof AnalyticsEqualFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsEqualFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsEqualFilter;

