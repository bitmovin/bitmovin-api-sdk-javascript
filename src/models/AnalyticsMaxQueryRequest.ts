import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsMaxQueryRequest
 */
export class AnalyticsMaxQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsMaxQueryRequest>) {
    super(obj);
  }
}

export default AnalyticsMaxQueryRequest;

