import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsOrder from './AnalyticsOrder';

/**
 * @export
 * @class AnalyticsOrderByEntry
 */
export class AnalyticsOrderByEntry {
  /**
   * @type {AnalyticsAttribute}
   * @memberof AnalyticsOrderByEntry
   */
  public name?: AnalyticsAttribute;

  /**
   * @type {AnalyticsOrder}
   * @memberof AnalyticsOrderByEntry
   */
  public order: AnalyticsOrder;

  constructor(obj: Partial<AnalyticsOrderByEntry>) {
    this.name = map(obj.name);
    this.order = map(obj.order);
  }
}

export default AnalyticsOrderByEntry;

