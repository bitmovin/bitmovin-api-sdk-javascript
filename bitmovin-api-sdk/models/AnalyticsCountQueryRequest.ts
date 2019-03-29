import {map} from '../common/Mapper';
import AnalyticsFilter from './AnalyticsFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsCountQueryRequest
 */
export default class AnalyticsCountQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: any) {
    super(obj);
  }

}
