import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsNotContainsFilter
 */
export class AnalyticsNotContainsFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsNotContainsFilter
   */
  public operator: 'NOTCONTAINS' = 'NOTCONTAINS';

  /**
   * @type {any}
   * @memberof AnalyticsNotContainsFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsNotContainsFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsNotContainsFilter;

