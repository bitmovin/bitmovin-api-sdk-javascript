import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import AnalyticsVirtualLicense from '../../models/AnalyticsVirtualLicense';
import AnalyticsVirtualLicenseRequest from '../../models/AnalyticsVirtualLicenseRequest';
import BitmovinResponse from '../../models/BitmovinResponse';
import PaginationResponse from '../../models/PaginationResponse';
import {AnalyticsVirtualLicenseListQueryParams, AnalyticsVirtualLicenseListQueryParamsBuilder} from './AnalyticsVirtualLicenseListQueryParams';

/**
 * VirtualLicensesApi - object-oriented interface
 * @export
 * @class VirtualLicensesApi
 * @extends {BaseAPI}
 */
export default class VirtualLicensesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Analytics Virtual License
   * @param {AnalyticsVirtualLicenseRequest} analyticsVirtualLicenseRequest Analytics Virtual License to be created
   * @throws {BitmovinError}
   * @memberof VirtualLicensesApi
   */
  public create(analyticsVirtualLicenseRequest?: AnalyticsVirtualLicenseRequest): Promise<AnalyticsVirtualLicense> {
    return this.restClient.post<AnalyticsVirtualLicense>('/analytics/virtual-licenses', {}, analyticsVirtualLicenseRequest).then((response) => {
      return map(response, AnalyticsVirtualLicense);
    });
  }

  /**
   * @summary Delete Analytics Virtual License
   * @param {string} virtualLicenseId Virtual License id
   * @throws {BitmovinError}
   * @memberof VirtualLicensesApi
   */
  public delete(virtualLicenseId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      virtual_license_id: virtualLicenseId
    };
    return this.restClient.delete<BitmovinResponse>('/analytics/virtual-licenses/{virtual_license_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary List Analytics Virtual Licenses
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof VirtualLicensesApi
   */
  public list(queryParameters?: AnalyticsVirtualLicenseListQueryParams | ((q: AnalyticsVirtualLicenseListQueryParamsBuilder) => AnalyticsVirtualLicenseListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsVirtualLicense>> {
    let queryParams: AnalyticsVirtualLicenseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsVirtualLicenseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsVirtualLicense>>('/analytics/virtual-licenses', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsVirtualLicense>(response, AnalyticsVirtualLicense);
    });
  }

  /**
   * @summary Update Analytics Virtual License
   * @param {string} virtualLicenseId Virtual license id
   * @param {AnalyticsVirtualLicenseRequest} analyticsVirtualLicenseRequest Analytics Virtual License details to be updated
   * @throws {BitmovinError}
   * @memberof VirtualLicensesApi
   */
  public update(virtualLicenseId: string, analyticsVirtualLicenseRequest?: AnalyticsVirtualLicenseRequest): Promise<AnalyticsVirtualLicense> {
    const pathParamMap = {
      virtual_license_id: virtualLicenseId
    };
    return this.restClient.put<AnalyticsVirtualLicense>('/analytics/virtual-licenses/{virtual_license_id}', pathParamMap, analyticsVirtualLicenseRequest).then((response) => {
      return map(response, AnalyticsVirtualLicense);
    });
  }
}
