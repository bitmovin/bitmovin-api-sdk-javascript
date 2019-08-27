import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsMinQueryRequest
 */
export class AnalyticsMinQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsMinQueryRequest>) {
    super(obj);

  }
}

export default AnalyticsMinQueryRequest;

