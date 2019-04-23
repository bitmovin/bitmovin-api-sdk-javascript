import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import PlayerLicenseAnalytics from '../../../models/PlayerLicenseAnalytics';

/**
 * AnalyticsApi - object-oriented interface
 * @export
 * @class AnalyticsApi
 * @extends {BaseAPI}
 */
export default class AnalyticsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Activate Analytics
   * @param {string} licenseId Id of the Player License
   * @param {PlayerLicenseAnalytics} [playerLicenseAnalytics] The Analytics key to be added to the Player License
   * @throws {RequiredError}
   * @memberof AnalyticsApi
   */
  public create(licenseId: string, playerLicenseAnalytics?: PlayerLicenseAnalytics): Promise<PlayerLicenseAnalytics> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.post<PlayerLicenseAnalytics>('/player/licenses/{license_id}/analytics', pathParamMap, playerLicenseAnalytics).then((response) => {
      return new PlayerLicenseAnalytics(response);
    });
  }

  /**
   * @summary Deactivate Analytics
   * @param {string} licenseId Id of license
   * @throws {RequiredError}
   * @memberof AnalyticsApi
   */
  public delete(licenseId: string): Promise<PlayerLicenseAnalytics> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.delete<PlayerLicenseAnalytics>('/player/licenses/{license_id}/analytics', pathParamMap).then((response) => {
      return new PlayerLicenseAnalytics(response);
    });
  }
}
