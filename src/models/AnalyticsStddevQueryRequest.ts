import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsStddevQueryRequest
 */
export class AnalyticsStddevQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsStddevQueryRequest>) {
    super(obj);

  }
}

export default AnalyticsStddevQueryRequest;

