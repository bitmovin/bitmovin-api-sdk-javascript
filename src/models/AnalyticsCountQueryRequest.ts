import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsCountQueryRequest
 */
export class AnalyticsCountQueryRequest extends AnalyticsQueryRequest {
  constructor(obj?: Partial<AnalyticsCountQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default AnalyticsCountQueryRequest;

