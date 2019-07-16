import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsCountQueryRequest
 */
export class AnalyticsCountQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsCountQueryRequest>) {
    super(obj);
  }
}

export default AnalyticsCountQueryRequest;

