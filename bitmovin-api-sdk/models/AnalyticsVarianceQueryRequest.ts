import {map} from '../common/Mapper';
import AnalyticsFilter from './AnalyticsFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsVarianceQueryRequest
 */
export default class AnalyticsVarianceQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: any) {
    super(obj);
  }

}
