import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import DomainsApi from './domains/DomainsApi';
import AnalyticsLicense from '../../models/AnalyticsLicense';
import AnalyticsLicenseUpdateRequest from '../../models/AnalyticsLicenseUpdateRequest';
import PaginationResponse from '../../models/PaginationResponse';
import {AnalyticsLicenseListQueryParams, AnalyticsLicenseListQueryParamsBuilder} from './AnalyticsLicenseListQueryParams';

/**
 * LicensesApi - object-oriented interface
 * @export
 * @class LicensesApi
 * @extends {BaseAPI}
 */
export default class LicensesApi extends BaseAPI {
  public domains: DomainsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.domains = new DomainsApi(configuration);
  }

  /**
   * @summary Create Analytics License
   * @param {AnalyticsLicense} analyticsLicense Analytics License to be created
   * @throws {BitmovinError}
   * @memberof LicensesApi
   */
  public create(analyticsLicense?: AnalyticsLicense): Promise<AnalyticsLicense> {
    return this.restClient.post<AnalyticsLicense>('/analytics/licenses', {}, analyticsLicense).then((response) => {
      return map(response, AnalyticsLicense);
    });
  }

  /**
   * @summary Get License
   * @param {string} licenseId License id
   * @throws {BitmovinError}
   * @memberof LicensesApi
   */
  public get(licenseId: string): Promise<AnalyticsLicense> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<AnalyticsLicense>('/analytics/licenses/{license_id}', pathParamMap).then((response) => {
      return map(response, AnalyticsLicense);
    });
  }

  /**
   * @summary List Analytics Licenses
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LicensesApi
   */
  public list(queryParameters?: AnalyticsLicenseListQueryParams | ((q: AnalyticsLicenseListQueryParamsBuilder) => AnalyticsLicenseListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsLicense>> {
    let queryParams: AnalyticsLicenseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsLicenseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsLicense>>('/analytics/licenses', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsLicense>(response, AnalyticsLicense);
    });
  }

  /**
   * @summary Update Analytics License
   * @param {string} licenseId License id
   * @param {AnalyticsLicenseUpdateRequest} analyticsLicenseUpdateRequest Analytics License details to be updated
   * @throws {BitmovinError}
   * @memberof LicensesApi
   */
  public update(licenseId: string, analyticsLicenseUpdateRequest?: AnalyticsLicenseUpdateRequest): Promise<AnalyticsLicense> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.put<AnalyticsLicense>('/analytics/licenses/{license_id}', pathParamMap, analyticsLicenseUpdateRequest).then((response) => {
      return map(response, AnalyticsLicense);
    });
  }
}
