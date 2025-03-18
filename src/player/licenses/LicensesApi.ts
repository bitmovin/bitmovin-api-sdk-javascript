import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import AnalyticsApi from './analytics/AnalyticsApi';
import DomainsApi from './domains/DomainsApi';
import ThirdPartyLicensingApi from './thirdPartyLicensing/ThirdPartyLicensingApi';
import PlayerLicense from '../../models/PlayerLicense';
import PlayerLicenseUpdateRequest from '../../models/PlayerLicenseUpdateRequest';
import PaginationResponse from '../../models/PaginationResponse';
import {PlayerLicenseListQueryParams, PlayerLicenseListQueryParamsBuilder} from './PlayerLicenseListQueryParams';

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
   * @throws {BitmovinError}
   * @memberof LicensesApi
   */
  public create(playerLicense?: PlayerLicense): Promise<PlayerLicense> {
    return this.restClient.post<PlayerLicense>('/player/licenses', {}, playerLicense).then((response) => {
      return map(response, PlayerLicense);
    });
  }

  /**
   * @summary Get License
   * @param {string} licenseId ID of the License
   * @throws {BitmovinError}
   * @memberof LicensesApi
   */
  public get(licenseId: string): Promise<PlayerLicense> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<PlayerLicense>('/player/licenses/{license_id}', pathParamMap).then((response) => {
      return map(response, PlayerLicense);
    });
  }

  /**
   * @summary List Player Licenses
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
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
      return new PaginationResponse<PlayerLicense>(response, PlayerLicense);
    });
  }

  /**
   * @summary Update License
   * @param {string} licenseId License id
   * @param {PlayerLicenseUpdateRequest} playerLicenseUpdateRequest Player License details to be updated
   * @throws {BitmovinError}
   * @memberof LicensesApi
   */
  public update(licenseId: string, playerLicenseUpdateRequest?: PlayerLicenseUpdateRequest): Promise<PlayerLicense> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.put<PlayerLicense>('/player/licenses/{license_id}', pathParamMap, playerLicenseUpdateRequest).then((response) => {
      return map(response, PlayerLicense);
    });
  }
}
