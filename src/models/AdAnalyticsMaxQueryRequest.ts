import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsMaxQueryRequest
 */
export class AdAnalyticsMaxQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj: Partial<AdAnalyticsMaxQueryRequest>) {
    super(obj);

  }
}

export default AdAnalyticsMaxQueryRequest;

