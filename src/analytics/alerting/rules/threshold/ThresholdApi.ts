import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AnalyticsAlertingRule from '../../../../models/AnalyticsAlertingRule';

/**
 * ThresholdApi - object-oriented interface
 * @export
 * @class ThresholdApi
 * @extends {BaseAPI}
 */
export default class ThresholdApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Analytics Alerting Rule
   * @param {string} licenseKey License key
   * @param {AnalyticsAlertingRule} analyticsAlertingRule Analytics alerting rule details to be created
   * @throws {BitmovinError}
   * @memberof ThresholdApi
   */
  public create(licenseKey: string, analyticsAlertingRule?: AnalyticsAlertingRule): Promise<AnalyticsAlertingRule> {
    const pathParamMap = {
      license_key: licenseKey
    };
    return this.restClient.post<AnalyticsAlertingRule>('/analytics/alerting/rules/{license_key}/threshold', pathParamMap, analyticsAlertingRule).then((response) => {
      return map(response, AnalyticsAlertingRule);
    });
  }

  /**
   * @summary Update Analytics Alerting Rule
   * @param {string} licenseKey License key
   * @param {string} ruleId Rule id
   * @param {AnalyticsAlertingRule} analyticsAlertingRule Analytics alerting rule details to be updated
   * @throws {BitmovinError}
   * @memberof ThresholdApi
   */
  public update(licenseKey: string, ruleId: string, analyticsAlertingRule?: AnalyticsAlertingRule): Promise<AnalyticsAlertingRule> {
    const pathParamMap = {
      license_key: licenseKey,
      rule_id: ruleId
    };
    return this.restClient.put<AnalyticsAlertingRule>('/analytics/alerting/rules/{license_key}/threshold/{rule_id}', pathParamMap, analyticsAlertingRule).then((response) => {
      return map(response, AnalyticsAlertingRule);
    });
  }
}
