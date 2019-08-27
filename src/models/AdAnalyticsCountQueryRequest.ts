import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AdAnalyticsQueryRequest from './AdAnalyticsQueryRequest';
import AnalyticsInterval from './AnalyticsInterval';

/**
 * @export
 * @class AdAnalyticsCountQueryRequest
 */
export class AdAnalyticsCountQueryRequest extends AdAnalyticsQueryRequest {
  constructor(obj: Partial<AdAnalyticsCountQueryRequest>) {
    super(obj);

  }
}

export default AdAnalyticsCountQueryRequest;

