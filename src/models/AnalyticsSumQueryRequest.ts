import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
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

