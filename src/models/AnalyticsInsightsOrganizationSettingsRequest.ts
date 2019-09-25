import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsInsightsOrganizationSettingsRequest
 */
export class AnalyticsInsightsOrganizationSettingsRequest {
  /**
   * Whether the organization's data is being contributed to industry insights
   * @type {boolean}
   * @memberof AnalyticsInsightsOrganizationSettingsRequest
   */
  public includeInInsights?: boolean;

  constructor(obj?: Partial<AnalyticsInsightsOrganizationSettingsRequest>) {
    if(!obj) {
      return;
    }
    this.includeInInsights = map(obj.includeInInsights);
  }
}

export default AnalyticsInsightsOrganizationSettingsRequest;

