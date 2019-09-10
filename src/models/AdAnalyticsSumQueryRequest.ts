import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsSumQueryRequest
 */
export class AdAnalyticsSumQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj?: Partial<AdAnalyticsSumQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default AdAnalyticsSumQueryRequest;

