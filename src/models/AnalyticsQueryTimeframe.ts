import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsQueryTimeframe
 */
export class AnalyticsQueryTimeframe {
  /**
   * Start of timeframe which is queried in UTC format.
   * @type {Date}
   * @memberof AnalyticsQueryTimeframe
   */
  public start?: Date;

  /**
   * End of timeframe which is queried in UTC format.
   * @type {Date}
   * @memberof AnalyticsQueryTimeframe
   */
  public end?: Date;

  constructor(obj: Partial<AnalyticsQueryTimeframe>) {

    this.start = map<Date>(obj.start, Date);
    this.end = map<Date>(obj.end, Date);
  }
}

export default AnalyticsQueryTimeframe;

