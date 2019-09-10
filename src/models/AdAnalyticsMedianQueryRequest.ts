import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsMedianQueryRequest
 */
export class AdAnalyticsMedianQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj?: Partial<AdAnalyticsMedianQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default AdAnalyticsMedianQueryRequest;

