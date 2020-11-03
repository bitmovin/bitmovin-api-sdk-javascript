import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import ThresholdApi from './threshold/ThresholdApi';
import AnalyticsAlertingRule from '../../../models/AnalyticsAlertingRule';
import PaginationResponse from '../../../models/PaginationResponse';
import {AnalyticsAlertingRuleListQueryParams, AnalyticsAlertingRuleListQueryParamsBuilder} from './AnalyticsAlertingRuleListQueryParams';

/**
 * RulesApi - object-oriented interface
 * @export
 * @class RulesApi
 * @extends {BaseAPI}
 */
export default class RulesApi extends BaseAPI {
  public threshold: ThresholdApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.threshold = new ThresholdApi(configuration);
  }

  /**
   * @summary Delete Analytics Alerting Rule By License Key And Id
   * @param {string} licenseKey License key
   * @param {string} ruleId Rule id
   * @throws {BitmovinError}
   * @memberof RulesApi
   */
  public delete(licenseKey: string, ruleId: string): Promise<AnalyticsAlertingRule> {
    const pathParamMap = {
      license_key: licenseKey,
      rule_id: ruleId
    };
    return this.restClient.delete<AnalyticsAlertingRule>('/analytics/alerting/rules/{license_key}/{rule_id}', pathParamMap).then((response) => {
      return map(response, AnalyticsAlertingRule);
    });
  }

  /**
   * @summary Get Analytics Alerting Rule By License Key And Id
   * @param {string} licenseKey License key
   * @param {string} ruleId Rule id
   * @throws {BitmovinError}
   * @memberof RulesApi
   */
  public get(licenseKey: string, ruleId: string): Promise<AnalyticsAlertingRule> {
    const pathParamMap = {
      license_key: licenseKey,
      rule_id: ruleId
    };
    return this.restClient.get<AnalyticsAlertingRule>('/analytics/alerting/rules/{license_key}/{rule_id}', pathParamMap).then((response) => {
      return map(response, AnalyticsAlertingRule);
    });
  }

  /**
   * @summary List Analytics Alerting Rules
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RulesApi
   */
  public list(queryParameters?: AnalyticsAlertingRuleListQueryParams | ((q: AnalyticsAlertingRuleListQueryParamsBuilder) => AnalyticsAlertingRuleListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsAlertingRule>> {
    let queryParams: AnalyticsAlertingRuleListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsAlertingRuleListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsAlertingRule>>('/analytics/alerting/rules', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsAlertingRule>(response, AnalyticsAlertingRule);
    });
  }
}
