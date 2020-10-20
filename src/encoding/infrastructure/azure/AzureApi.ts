import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import RegionsApi from './regions/RegionsApi';
import AzureAccount from '../../../models/AzureAccount';
import PaginationResponse from '../../../models/PaginationResponse';
import {AzureAccountListQueryParams, AzureAccountListQueryParamsBuilder} from './AzureAccountListQueryParams';

/**
 * AzureApi - object-oriented interface
 * @export
 * @class AzureApi
 * @extends {BaseAPI}
 */
export default class AzureApi extends BaseAPI {
  public regions: RegionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.regions = new RegionsApi(configuration);
  }

  /**
   * @summary Add Azure Account
   * @param {AzureAccount} azureAccount The Azure Account to be added
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public create(azureAccount?: AzureAccount): Promise<AzureAccount> {
    return this.restClient.post<AzureAccount>('/encoding/infrastructure/azure', {}, azureAccount).then((response) => {
      return map(response, AzureAccount);
    });
  }

  /**
   * @summary Delete Azure Account
   * @param {string} infrastructureId Id of the Azure account
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public delete(infrastructureId: string): Promise<AzureAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.delete<AzureAccount>('/encoding/infrastructure/azure/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, AzureAccount);
    });
  }

  /**
   * @summary Azure Account Details
   * @param {string} infrastructureId Id of the Azure account
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public get(infrastructureId: string): Promise<AzureAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<AzureAccount>('/encoding/infrastructure/azure/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, AzureAccount);
    });
  }

  /**
   * @summary List Azure Accounts
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public list(queryParameters?: AzureAccountListQueryParams | ((q: AzureAccountListQueryParamsBuilder) => AzureAccountListQueryParamsBuilder)): Promise<PaginationResponse<AzureAccount>> {
    let queryParams: AzureAccountListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AzureAccountListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AzureAccount>>('/encoding/infrastructure/azure', {}, queryParams).then((response) => {
      return new PaginationResponse<AzureAccount>(response, AzureAccount);
    });
  }
}
