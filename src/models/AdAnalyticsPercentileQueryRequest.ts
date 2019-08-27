import {map} from '../common/Mapper';
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
   * The percentage (0-99) used for percentile queries.
   * @type {number}
   * @memberof AdAnalyticsPercentileQueryRequest
   */
  public percentile?: number;

  constructor(obj: Partial<AdAnalyticsPercentileQueryRequest>) {
    super(obj);

    this.percentile = obj.percentile;
  }
}

export default AdAnalyticsPercentileQueryRequest;

