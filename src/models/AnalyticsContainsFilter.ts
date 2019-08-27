import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsContainsFilter
 */
export class AnalyticsContainsFilter extends AnalyticsAbstractFilter {
  /**
   * Discriminator property for AnalyticsAbstractFilter
   * @type {string}
   * @memberof AnalyticsContainsFilter
   */
  public operator: 'CONTAINS' = 'CONTAINS';

  /**
   * @type {any}
   * @memberof AnalyticsContainsFilter
   */
  public value?: any;

  constructor(obj: Partial<AnalyticsContainsFilter>) {
    super(obj);

    this.value = obj.value;
  }
}

export default AnalyticsContainsFilter;

