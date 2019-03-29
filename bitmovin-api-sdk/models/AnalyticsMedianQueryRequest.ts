import {map} from '../common/Mapper';
import AnalyticsFilter from './AnalyticsFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsMedianQueryRequest
 */
export default class AnalyticsMedianQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: any) {
    super(obj);
  }

}
