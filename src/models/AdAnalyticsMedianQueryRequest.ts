import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AdAnalyticsMedianQueryRequest
 */
export class AdAnalyticsMedianQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AdAnalyticsMedianQueryRequest>) {
    super(obj);
  }
}

export default AdAnalyticsMedianQueryRequest;

