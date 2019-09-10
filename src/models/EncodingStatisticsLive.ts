import EncodingStatistics from './EncodingStatistics';

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

