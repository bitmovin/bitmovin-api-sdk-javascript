import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsPercentileQueryRequest
 */
export class AnalyticsPercentileQueryRequest extends AnalyticsQueryRequest {
  /**
   * The percentage (0-99) used for percentile queries. (required)
   * @type {number}
   * @memberof AnalyticsPercentileQueryRequest
   */
  public percentile?: number;

  constructor(obj?: Partial<AnalyticsPercentileQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.percentile = map(obj.percentile);
  }
}

export default AnalyticsPercentileQueryRequest;

