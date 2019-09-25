import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsInsightsOrganizationSettings
 */
export class AnalyticsInsightsOrganizationSettings {
  /**
   * Organization ID
   * @type {string}
   * @memberof AnalyticsInsightsOrganizationSettings
   */
  public orgId?: string;

  /**
   * Whether the organization's data is included in the industry insights
   * @type {boolean}
   * @memberof AnalyticsInsightsOrganizationSettings
   */
  public includeInInsights?: boolean;

  /**
   * Industry of the organization
   * @type {string}
   * @memberof AnalyticsInsightsOrganizationSettings
   */
  public industry?: string;

  /**
   * Subindustry of the organization
   * @type {string}
   * @memberof AnalyticsInsightsOrganizationSettings
   */
  public subIndustry?: string;

  /**
   * Whether the organization is on an analytics trial plan
   * @type {boolean}
   * @memberof AnalyticsInsightsOrganizationSettings
   */
  public isTrial?: boolean;

  constructor(obj?: Partial<AnalyticsInsightsOrganizationSettings>) {
    if(!obj) {
      return;
    }
    this.orgId = map(obj.orgId);
    this.includeInInsights = map(obj.includeInInsights);
    this.industry = map(obj.industry);
    this.subIndustry = map(obj.subIndustry);
    this.isTrial = map(obj.isTrial);
  }
}

export default AnalyticsInsightsOrganizationSettings;

