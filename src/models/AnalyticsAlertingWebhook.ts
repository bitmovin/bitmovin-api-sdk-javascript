import {map, mapArray} from '../common/Mapper';
import WebhookHttpMethod from './WebhookHttpMethod';

/**
 * @export
 * @class AnalyticsAlertingWebhook
 */
export class AnalyticsAlertingWebhook {
  /**
   * Webhook url (required)
   * @type {string}
   * @memberof AnalyticsAlertingWebhook
   */
  public url?: string;

  /**
   * HTTP method used for the webhook (required)
   * @type {WebhookHttpMethod}
   * @memberof AnalyticsAlertingWebhook
   */
  public method?: WebhookHttpMethod;

  /**
   * Whether to skip SSL certification verification or not (required)
   * @type {boolean}
   * @memberof AnalyticsAlertingWebhook
   */
  public insecureSsl?: boolean;

  constructor(obj?: Partial<AnalyticsAlertingWebhook>) {
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.method = map(obj.method);
    this.insecureSsl = map(obj.insecureSsl);
  }
}

export default AnalyticsAlertingWebhook;

