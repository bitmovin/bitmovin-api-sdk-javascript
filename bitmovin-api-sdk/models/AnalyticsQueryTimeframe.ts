import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsQueryTimeframe
 */
export default class AnalyticsQueryTimeframe {
  constructor(obj: any) {
    this.start = map(obj.start);
    this.end = map(obj.end);
  }

  /**
   * Start of timeframe which is queried
   * @type {Date}
   * @memberof AnalyticsQueryTimeframe
   */
  public start?: Date;
  /**
   * End of timeframe which is queried
   * @type {Date}
   * @memberof AnalyticsQueryTimeframe
   */
  public end?: Date;
}
