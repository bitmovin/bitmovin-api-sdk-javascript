import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsVarianceQueryRequest
 */
export class AnalyticsVarianceQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsVarianceQueryRequest>) {
    super(obj);
  }
}

export default AnalyticsVarianceQueryRequest;

