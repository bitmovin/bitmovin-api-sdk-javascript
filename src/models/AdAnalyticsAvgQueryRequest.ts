import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsAvgQueryRequest
 */
export class AdAnalyticsAvgQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj?: Partial<AdAnalyticsAvgQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default AdAnalyticsAvgQueryRequest;

