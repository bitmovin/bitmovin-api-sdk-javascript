import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsMaxQueryRequest
 */
export class AnalyticsMaxQueryRequest extends AnalyticsQueryRequest {
  constructor(obj?: Partial<AnalyticsMaxQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default AnalyticsMaxQueryRequest;

