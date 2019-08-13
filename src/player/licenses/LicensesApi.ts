import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import AnalyticsApi from './analytics/AnalyticsApi';
import DomainsApi from './domains/DomainsApi';
import ThirdPartyLicensingApi from './thirdPartyLicensing/ThirdPartyLicensingApi';
import PlayerLicense from '../../models/PlayerLicense';
import PaginationResponse from '../../models/PaginationResponse';
import {PlayerLicenseListQueryParams, PlayerLicenseListQueryParamsBuilder} from './PlayerLicenseListQueryParams';
import {getType, map} from '../../common/Mapper';

/**
 * LicensesApi - object-oriented interface
 * @export
 * @class LicensesApi
 * @extends {BaseAPI}
 */
export default class LicensesApi extends BaseAPI {
  public analytics: AnalyticsApi;
  public domains: DomainsApi;
  public thirdPartyLicensing: ThirdPartyLicensingApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.analytics = new AnalyticsApi(configuration);
    this.domains = new DomainsApi(configuration);
    this.thirdPartyLicensing = new ThirdPartyLicensingApi(configuration);
  }

  /**
   * @summary Create Player License
   * @param {PlayerLicense} playerLicense Player License to be created
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public create(playerLicense?: PlayerLicense): Promise<PlayerLicense> {
    return this.restClient.post<PlayerLicense>('/player/licenses', {}, playerLicense).then((response) => {
      return new PlayerLicense(response);
    });
  }

  /**
   * @summary Get License
   * @param {string} licenseId ID of the License
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public get(licenseId: string): Promise<PlayerLicense> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<PlayerLicense>('/player/licenses/{license_id}', pathParamMap).then((response) => {
      return new PlayerLicense(response);
    });
  }

  /**
   * @summary List Player Licenses
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public list(queryParameters?: PlayerLicenseListQueryParams | ((q: PlayerLicenseListQueryParamsBuilder) => PlayerLicenseListQueryParamsBuilder)): Promise<PaginationResponse<PlayerLicense>> {
    let queryParams: PlayerLicenseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PlayerLicenseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PlayerLicense>>('/player/licenses', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<PlayerLicense>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new PlayerLicense(i));
      }
      return paginationResponse;
    });
  }
}
