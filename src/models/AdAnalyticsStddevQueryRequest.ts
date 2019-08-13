import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsStddevQueryRequest
 */
export class AdAnalyticsStddevQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj: Partial<AdAnalyticsStddevQueryRequest>) {
    super(obj);
  }
}

export default AdAnalyticsStddevQueryRequest;

