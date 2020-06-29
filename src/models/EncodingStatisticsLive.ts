import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';
import EgressInformation from './EgressInformation';
import EncodingStatistics from './EncodingStatistics';
import StatisticsPerMuxing from './StatisticsPerMuxing';
import StatisticsPerStream from './StatisticsPerStream';

/**
 * @export
 * @class EncodingStatisticsLive
 */
export class EncodingStatisticsLive extends EncodingStatistics {
  constructor(obj?: Partial<EncodingStatisticsLive>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default EncodingStatisticsLive;

