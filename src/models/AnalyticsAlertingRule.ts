import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAlertingNotification from './AnalyticsAlertingNotification';
import AnalyticsRuleMetric from './AnalyticsRuleMetric';
import AnalyticsThresholdRuleOptions from './AnalyticsThresholdRuleOptions';

/**
 * @export
 * @class AnalyticsAlertingRule
 */
export class AnalyticsAlertingRule {
  /**
   * The id of the alerting rule
   * @type {string}
   * @memberof AnalyticsAlertingRule
   */
  public id?: string;

  /**
   * License key of the alerting rule
   * @type {string}
   * @memberof AnalyticsAlertingRule
   */
  public licenseKey?: string;

  /**
   * Type of alerting rule
   * @type {string}
   * @memberof AnalyticsAlertingRule
   */
  public type?: string;

  /**
   * Alerting rule name (required)
   * @type {string}
   * @memberof AnalyticsAlertingRule
   */
  public name?: string;

  /**
   * @type {AnalyticsRuleMetric}
   * @memberof AnalyticsAlertingRule
   */
  public metric?: AnalyticsRuleMetric;

  /**
   * @type {AnalyticsAbstractFilter[]}
   * @memberof AnalyticsAlertingRule
   */
  public filters?: AnalyticsAbstractFilter[];

  /**
   * @type {AnalyticsThresholdRuleOptions}
   * @memberof AnalyticsAlertingRule
   */
  public options?: AnalyticsThresholdRuleOptions;

  /**
   * @type {AnalyticsAlertingNotification}
   * @memberof AnalyticsAlertingRule
   */
  public notification?: AnalyticsAlertingNotification;

  constructor(obj?: Partial<AnalyticsAlertingRule>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.licenseKey = map(obj.licenseKey);
    this.type = map(obj.type);
    this.name = map(obj.name);
    this.metric = map(obj.metric);
    this.filters = mapArray(obj.filters, AnalyticsAbstractFilter);
    this.options = map(obj.options, AnalyticsThresholdRuleOptions);
    this.notification = map(obj.notification, AnalyticsAlertingNotification);
  }
}

export default AnalyticsAlertingRule;

