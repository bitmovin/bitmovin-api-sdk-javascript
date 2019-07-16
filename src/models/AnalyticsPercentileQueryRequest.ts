import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsPercentileQueryRequest
 */
export class AnalyticsPercentileQueryRequest extends AnalyticsQueryRequest {
  /**
   * The percentage (0-99) used for percentile queries.
   * @type {number}
   * @memberof AnalyticsPercentileQueryRequest
   */
  public percentile?: number;

  constructor(obj: Partial<AnalyticsPercentileQueryRequest>) {
    super(obj);
    this.percentile = map(obj.percentile);
  }
}

export default AnalyticsPercentileQueryRequest;

