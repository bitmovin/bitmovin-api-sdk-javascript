import {map} from '../common/Mapper';
import AnalyticsOrder from './AnalyticsOrder';

/**
 * @export
 * @class AnalyticsOrderByEntry
 */
export class AnalyticsOrderByEntry {
  constructor(obj: any) {
    this.name = map(obj.name);
    this.order = map(obj.order);
  }

  /**
   * @type {string}
   * @memberof AnalyticsOrderByEntry
   */
  public name?: string;
  /**
   * @type {AnalyticsOrder}
   * @memberof AnalyticsOrderByEntry
   */
  public order: AnalyticsOrder;
}

export default AnalyticsOrderByEntry;

