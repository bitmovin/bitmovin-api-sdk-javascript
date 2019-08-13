import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AdAnalyticsPercentileQueryRequest
 */
export class AdAnalyticsPercentileQueryRequest extends AnalyticsQueryRequest {
  /**
   * The percentage (0-99) used for percentile queries.
   * @type {number}
   * @memberof AdAnalyticsPercentileQueryRequest
   */
  public percentile?: number;

  constructor(obj: Partial<AdAnalyticsPercentileQueryRequest>) {
    super(obj);
    this.percentile = map(obj.percentile);
  }
}

export default AdAnalyticsPercentileQueryRequest;

