import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AnalyticsInsightsOrganizationSettings from '../../../../models/AnalyticsInsightsOrganizationSettings';
import AnalyticsInsightsOrganizationSettingsRequest from '../../../../models/AnalyticsInsightsOrganizationSettingsRequest';

/**
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
export default class SettingsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get the current organization settings for industry insights
   * @param {string} organizationId Organization id
   * @throws {BitmovinError}
   * @memberof SettingsApi
   */
  public get(organizationId: string): Promise<AnalyticsInsightsOrganizationSettings> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.get<AnalyticsInsightsOrganizationSettings>('/analytics/insights/organizations/{organization_id}/settings', pathParamMap).then((response) => {
      return map(response, AnalyticsInsightsOrganizationSettings);
    });
  }

  /**
   * @summary Update the organization settings for industry insights
   * @param {string} organizationId Organization id
   * @param {AnalyticsInsightsOrganizationSettingsRequest} analyticsInsightsOrganizationSettingsRequest Organization settings to be updated
   * @throws {BitmovinError}
   * @memberof SettingsApi
   */
  public update(organizationId: string, analyticsInsightsOrganizationSettingsRequest?: AnalyticsInsightsOrganizationSettingsRequest): Promise<AnalyticsInsightsOrganizationSettings> {
    const pathParamMap = {
      organization_id: organizationId
    };
    return this.restClient.put<AnalyticsInsightsOrganizationSettings>('/analytics/insights/organizations/{organization_id}/settings', pathParamMap, analyticsInsightsOrganizationSettingsRequest).then((response) => {
      return map(response, AnalyticsInsightsOrganizationSettings);
    });
  }
}
