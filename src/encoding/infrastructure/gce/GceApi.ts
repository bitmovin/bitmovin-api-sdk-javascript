import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import RegionsApi from './regions/RegionsApi';
import GceAccount from '../../../models/GceAccount';
import PaginationResponse from '../../../models/PaginationResponse';
import {GceAccountListQueryParams, GceAccountListQueryParamsBuilder} from './GceAccountListQueryParams';

/**
 * GceApi - object-oriented interface
 * @export
 * @class GceApi
 * @extends {BaseAPI}
 */
export default class GceApi extends BaseAPI {
  public regions: RegionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.regions = new RegionsApi(configuration);
  }

  /**
   * @summary Add GCE Account
   * @param {GceAccount} gceAccount The GCE Account to be added
   * @throws {BitmovinError}
   * @memberof GceApi
   */
  public create(gceAccount?: GceAccount): Promise<GceAccount> {
    return this.restClient.post<GceAccount>('/encoding/infrastructure/gce', {}, gceAccount).then((response) => {
      return map(response, GceAccount);
    });
  }

  /**
   * @summary Delete GCE Account
   * @param {string} infrastructureId Id of the GCE account
   * @throws {BitmovinError}
   * @memberof GceApi
   */
  public delete(infrastructureId: string): Promise<GceAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.delete<GceAccount>('/encoding/infrastructure/gce/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, GceAccount);
    });
  }

  /**
   * @summary GCE Account Details
   * @param {string} infrastructureId Id of the GCE account
   * @throws {BitmovinError}
   * @memberof GceApi
   */
  public get(infrastructureId: string): Promise<GceAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<GceAccount>('/encoding/infrastructure/gce/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, GceAccount);
    });
  }

  /**
   * @summary List GCE Accounts
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof GceApi
   */
  public list(queryParameters?: GceAccountListQueryParams | ((q: GceAccountListQueryParamsBuilder) => GceAccountListQueryParamsBuilder)): Promise<PaginationResponse<GceAccount>> {
    let queryParams: GceAccountListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new GceAccountListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<GceAccount>>('/encoding/infrastructure/gce', {}, queryParams).then((response) => {
      return new PaginationResponse<GceAccount>(response, GceAccount);
    });
  }
}
