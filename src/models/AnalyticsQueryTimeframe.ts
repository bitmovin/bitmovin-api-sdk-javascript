import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsQueryTimeframe
 */
export class AnalyticsQueryTimeframe {
  /**
   * Start of timeframe which is queried
   * @type {string}
   * @memberof AnalyticsQueryTimeframe
   */
  public start?: string;

  /**
   * End of timeframe which is queried
   * @type {string}
   * @memberof AnalyticsQueryTimeframe
   */
  public end?: string;

  constructor(obj: Partial<AnalyticsQueryTimeframe>) {
    this.start = map(obj.start);
    this.end = map(obj.end);
  }
}

export default AnalyticsQueryTimeframe;

