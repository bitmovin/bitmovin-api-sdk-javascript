import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
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

