import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsThresholdRuleOptions
 */
export class AnalyticsThresholdRuleOptions {
  /**
   * Threshold for triggering alert (required)
   * @type {number}
   * @memberof AnalyticsThresholdRuleOptions
   */
  public threshold?: number;

  /**
   * Persistence of threshold violation in minutes (required)
   * @type {number}
   * @memberof AnalyticsThresholdRuleOptions
   */
  public persistence?: number;

  /**
   * Sample size for rule processing (required)
   * @type {number}
   * @memberof AnalyticsThresholdRuleOptions
   */
  public sampleSize?: number;

  /**
   * Number of minutes without violation after which incident is considered as recovered (required)
   * @type {number}
   * @memberof AnalyticsThresholdRuleOptions
   */
  public recovery?: number;

  /**
   * Interval for repeating notifications (required)
   * @type {number}
   * @memberof AnalyticsThresholdRuleOptions
   */
  public repeatInterval?: number;

  /**
   * Send notification after incident is resolved
   * @type {boolean}
   * @memberof AnalyticsThresholdRuleOptions
   */
  public notifyOnResolved?: boolean;

  constructor(obj?: Partial<AnalyticsThresholdRuleOptions>) {
    if(!obj) {
      return;
    }
    this.threshold = map(obj.threshold);
    this.persistence = map(obj.persistence);
    this.sampleSize = map(obj.sampleSize);
    this.recovery = map(obj.recovery);
    this.repeatInterval = map(obj.repeatInterval);
    this.notifyOnResolved = map(obj.notifyOnResolved);
  }
}

export default AnalyticsThresholdRuleOptions;

