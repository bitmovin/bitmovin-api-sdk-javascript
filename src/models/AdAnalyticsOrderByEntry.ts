import {map} from '../common/Mapper';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AnalyticsOrder from './AnalyticsOrder';

/**
 * @export
 * @class AdAnalyticsOrderByEntry
 */
export class AdAnalyticsOrderByEntry {
  /**
   * @type {AdAnalyticsAttribute}
   * @memberof AdAnalyticsOrderByEntry
   */
  public name?: AdAnalyticsAttribute;

  /**
   * @type {AnalyticsOrder}
   * @memberof AdAnalyticsOrderByEntry
   */
  public order: AnalyticsOrder;

  constructor(obj: Partial<AdAnalyticsOrderByEntry>) {
    this.name = map(obj.name);
    this.order = map(obj.order);
  }
}

export default AdAnalyticsOrderByEntry;

