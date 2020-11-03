import {map, mapArray} from '../common/Mapper';
import AnalyticsAlertingWebhook from './AnalyticsAlertingWebhook';

/**
 * @export
 * @class AnalyticsAlertingNotification
 */
export class AnalyticsAlertingNotification {
  /**
   * List of email addresses
   * @type {string[]}
   * @memberof AnalyticsAlertingNotification
   */
  public emails?: string[];

  /**
   * @type {AnalyticsAlertingWebhook[]}
   * @memberof AnalyticsAlertingNotification
   */
  public webhooks?: AnalyticsAlertingWebhook[];

  constructor(obj?: Partial<AnalyticsAlertingNotification>) {
    if(!obj) {
      return;
    }
    this.emails = mapArray(obj.emails);
    this.webhooks = mapArray(obj.webhooks, AnalyticsAlertingWebhook);
  }
}

export default AnalyticsAlertingNotification;

