import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import RegionsApi from './regions/RegionsApi';
import AkamaiAccount from '../../../models/AkamaiAccount';
import PaginationResponse from '../../../models/PaginationResponse';
import {AkamaiAccountListQueryParams, AkamaiAccountListQueryParamsBuilder} from './AkamaiAccountListQueryParams';

/**
 * AkamaiApi - object-oriented interface
 * @export
 * @class AkamaiApi
 * @extends {BaseAPI}
 */
export default class AkamaiApi extends BaseAPI {
  public regions: RegionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.regions = new RegionsApi(configuration);
  }

  /**
   * @summary Add Akamai account
   * @param {AkamaiAccount} akamaiAccount The Akamai account to be added
   * @throws {BitmovinError}
   * @memberof AkamaiApi
   */
  public create(akamaiAccount?: AkamaiAccount): Promise<AkamaiAccount> {
    return this.restClient.post<AkamaiAccount>('/encoding/infrastructure/akamai', {}, akamaiAccount).then((response) => {
      return map(response, AkamaiAccount);
    });
  }

  /**
   * @summary Delete Akamai account
   * @param {string} infrastructureId Id of the Akamai account
   * @throws {BitmovinError}
   * @memberof AkamaiApi
   */
  public delete(infrastructureId: string): Promise<AkamaiAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.delete<AkamaiAccount>('/encoding/infrastructure/akamai/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, AkamaiAccount);
    });
  }

  /**
   * @summary Akamai account details
   * @param {string} infrastructureId Id of the Akamai account
   * @throws {BitmovinError}
   * @memberof AkamaiApi
   */
  public get(infrastructureId: string): Promise<AkamaiAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<AkamaiAccount>('/encoding/infrastructure/akamai/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, AkamaiAccount);
    });
  }

  /**
   * @summary List Akamai accounts
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AkamaiApi
   */
  public list(queryParameters?: AkamaiAccountListQueryParams | ((q: AkamaiAccountListQueryParamsBuilder) => AkamaiAccountListQueryParamsBuilder)): Promise<PaginationResponse<AkamaiAccount>> {
    let queryParams: AkamaiAccountListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AkamaiAccountListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AkamaiAccount>>('/encoding/infrastructure/akamai', {}, queryParams).then((response) => {
      return new PaginationResponse<AkamaiAccount>(response, AkamaiAccount);
    });
  }
}
