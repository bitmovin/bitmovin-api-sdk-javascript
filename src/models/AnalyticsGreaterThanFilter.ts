import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsGreaterThanFilter
 */
export class AnalyticsGreaterThanFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsGreaterThanFilter
   */
  public operator: 'GT' = 'GT';

  /**
   * @type {any}
   * @memberof AnalyticsGreaterThanFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsGreaterThanFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsGreaterThanFilter;

