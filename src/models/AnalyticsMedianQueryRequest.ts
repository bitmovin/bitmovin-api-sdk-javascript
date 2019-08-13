import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsMedianQueryRequest
 */
export class AnalyticsMedianQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsMedianQueryRequest>) {
    super(obj);
  }
}

export default AnalyticsMedianQueryRequest;

