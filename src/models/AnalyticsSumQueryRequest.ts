import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsSumQueryRequest
 */
export class AnalyticsSumQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsSumQueryRequest>) {
    super(obj);
  }
}

export default AnalyticsSumQueryRequest;

