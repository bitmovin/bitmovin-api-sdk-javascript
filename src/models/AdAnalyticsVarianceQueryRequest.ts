import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsVarianceQueryRequest
 */
export class AdAnalyticsVarianceQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj: Partial<AdAnalyticsVarianceQueryRequest>) {
    super(obj);
  }
}

export default AdAnalyticsVarianceQueryRequest;

