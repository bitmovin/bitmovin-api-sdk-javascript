import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsMinQueryRequest
 */
export class AdAnalyticsMinQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj: Partial<AdAnalyticsMinQueryRequest>) {
    super(obj);
  }
}

export default AdAnalyticsMinQueryRequest;

