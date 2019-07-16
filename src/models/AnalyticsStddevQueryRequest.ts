import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
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

