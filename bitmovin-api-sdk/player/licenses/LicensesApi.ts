import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import DomainsApi from './domains/DomainsApi';
import ThirdPartyLicensingApi from './thirdPartyLicensing/ThirdPartyLicensingApi';
import PlayerLicense from '../../models/PlayerLicense';
import PaginationResponse from '../../models/PaginationResponse';
import PlayerLicenseListQueryParams from './PlayerLicenseListQueryParams';

/**
 * LicensesApi - object-oriented interface
 * @export
 * @class LicensesApi
 * @extends {BaseAPI}
 */
export default class LicensesApi extends BaseAPI {
  public domains: DomainsApi;
  public thirdPartyLicensing: ThirdPartyLicensingApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.domains = new DomainsApi(configuration);
    this.thirdPartyLicensing = new ThirdPartyLicensingApi(configuration);
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
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public list(queryParams?: PlayerLicenseListQueryParams): Promise<PaginationResponse<PlayerLicense>> {
    return this.restClient.get<PaginationResponse<PlayerLicense>>('/player/licenses', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<PlayerLicense>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new PlayerLicense(i));
      }
      return paginationResponse;
    });
  }
}
