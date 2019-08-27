import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsLessThanFilter
 */
export class AnalyticsLessThanFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsLessThanFilter
   */
  public operator: 'LT' = 'LT';

  /**
   * @type {any}
   * @memberof AnalyticsLessThanFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsLessThanFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsLessThanFilter;

