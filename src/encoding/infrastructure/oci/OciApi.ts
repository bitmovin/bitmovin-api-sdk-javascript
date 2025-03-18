import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import RegionsApi from './regions/RegionsApi';
import OciAccount from '../../../models/OciAccount';
import PaginationResponse from '../../../models/PaginationResponse';
import {OciAccountListQueryParams, OciAccountListQueryParamsBuilder} from './OciAccountListQueryParams';

/**
 * OciApi - object-oriented interface
 * @export
 * @class OciApi
 * @extends {BaseAPI}
 */
export default class OciApi extends BaseAPI {
  public regions: RegionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.regions = new RegionsApi(configuration);
  }

  /**
   * @summary Add OCI account
   * @param {OciAccount} ociAccount The OCI account to be added
   * @throws {BitmovinError}
   * @memberof OciApi
   */
  public create(ociAccount?: OciAccount): Promise<OciAccount> {
    return this.restClient.post<OciAccount>('/encoding/infrastructure/oci', {}, ociAccount).then((response) => {
      return map(response, OciAccount);
    });
  }

  /**
   * @summary Delete OCI account
   * @param {string} infrastructureId Id of the OCI account
   * @throws {BitmovinError}
   * @memberof OciApi
   */
  public delete(infrastructureId: string): Promise<OciAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.delete<OciAccount>('/encoding/infrastructure/oci/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, OciAccount);
    });
  }

  /**
   * @summary OCI account details
   * @param {string} infrastructureId Id of the OCI account
   * @throws {BitmovinError}
   * @memberof OciApi
   */
  public get(infrastructureId: string): Promise<OciAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<OciAccount>('/encoding/infrastructure/oci/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, OciAccount);
    });
  }

  /**
   * @summary List OCI accounts
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof OciApi
   */
  public list(queryParameters?: OciAccountListQueryParams | ((q: OciAccountListQueryParamsBuilder) => OciAccountListQueryParamsBuilder)): Promise<PaginationResponse<OciAccount>> {
    let queryParams: OciAccountListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new OciAccountListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<OciAccount>>('/encoding/infrastructure/oci', {}, queryParams).then((response) => {
      return new PaginationResponse<OciAccount>(response, OciAccount);
    });
  }
}
