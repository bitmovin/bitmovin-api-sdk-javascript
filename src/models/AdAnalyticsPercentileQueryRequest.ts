import {map, mapArray} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsPercentileQueryRequest
 */
export class AdAnalyticsPercentileQueryRequest extends AdAnalyticsQueryRequest {
  /**
   * The percentage (0-99) used for percentile queries. (required)
   * @type {number}
   * @memberof AdAnalyticsPercentileQueryRequest
   */
  public percentile?: number;

  constructor(obj?: Partial<AdAnalyticsPercentileQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.percentile = map(obj.percentile);
  }
}

export default AdAnalyticsPercentileQueryRequest;

