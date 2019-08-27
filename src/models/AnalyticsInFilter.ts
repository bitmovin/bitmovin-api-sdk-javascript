import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsInFilter
 */
export class AnalyticsInFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsInFilter
   */
  public operator: 'IN' = 'IN';

  /**
   * @type {any[]}
   * @memberof AnalyticsInFilter
   */
  public value?: any[];

  constructor(obj: Partial<AnalyticsInFilter>) {
    super(obj);

    this.value = obj.value || [];
  }
}

export default AnalyticsInFilter;

