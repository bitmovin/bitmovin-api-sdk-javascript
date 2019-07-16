import {map} from '../common/Mapper';
import EncodingStatistics from './EncodingStatistics';

/**
 * @export
 * @class EncodingStatisticsLive
 */
export class EncodingStatisticsLive extends EncodingStatistics {
  constructor(obj: Partial<EncodingStatisticsLive>) {
    super(obj);
  }
}

export default EncodingStatisticsLive;

