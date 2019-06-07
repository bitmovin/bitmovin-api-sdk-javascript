import {map} from '../common/Mapper';
import AnalyticsFilter from './AnalyticsFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsPercentileQueryRequest
 */
export class AnalyticsPercentileQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: any) {
    super(obj);
    this.percentile = map(obj.percentile);
  }

  /**
   * The percentage (0-99) used for percentile queries.
   * @type {number}
   * @memberof AnalyticsPercentileQueryRequest
   */
  public percentile?: number;
}

export default AnalyticsPercentileQueryRequest;

