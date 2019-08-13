import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsVarianceQueryRequest
 */
export class AnalyticsVarianceQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsVarianceQueryRequest>) {
    super(obj);
  }
}

export default AnalyticsVarianceQueryRequest;

