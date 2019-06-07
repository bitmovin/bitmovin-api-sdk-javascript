import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsQueryTimeframe
 */
export class AnalyticsQueryTimeframe {
  constructor(obj: any) {
    this.start = map(obj.start);
    this.end = map(obj.end);
  }

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
}

export default AnalyticsQueryTimeframe;

