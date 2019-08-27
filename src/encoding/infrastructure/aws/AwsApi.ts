import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import RegionsApi from './regions/RegionsApi';
import AwsAccount from '../../../models/AwsAccount';
import PaginationResponse from '../../../models/PaginationResponse';
import {AwsAccountListQueryParams, AwsAccountListQueryParamsBuilder} from './AwsAccountListQueryParams';

/**
 * AwsApi - object-oriented interface
 * @export
 * @class AwsApi
 * @extends {BaseAPI}
 */
export default class AwsApi extends BaseAPI {
  public regions: RegionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.regions = new RegionsApi(configuration);
  }

  /**
   * @summary Add AWS Account
   * @param {AwsAccount} awsAccount The AWS Account to be added
   * @throws {RequiredError}
   * @memberof AwsApi
   */
  public create(awsAccount?: AwsAccount): Promise<AwsAccount> {
    return this.restClient.post<AwsAccount>('/encoding/infrastructure/aws', {}, awsAccount).then((response) => {
      return new AwsAccount(response);
    });
  }

  /**
   * @summary Delete AWS Account
   * @param {string} infrastructureId Id of the AWS account
   * @throws {RequiredError}
   * @memberof AwsApi
   */
  public delete(infrastructureId: string): Promise<AwsAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.delete<AwsAccount>('/encoding/infrastructure/aws/{infrastructure_id}', pathParamMap).then((response) => {
      return new AwsAccount(response);
    });
  }

  /**
   * @summary AWS Account Details
   * @param {string} infrastructureId Id of the AWS account
   * @throws {RequiredError}
   * @memberof AwsApi
   */
  public get(infrastructureId: string): Promise<AwsAccount> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<AwsAccount>('/encoding/infrastructure/aws/{infrastructure_id}', pathParamMap).then((response) => {
      return new AwsAccount(response);
    });
  }

  /**
   * @summary List AWS Accounts
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AwsApi
   */
  public list(queryParameters?: AwsAccountListQueryParams | ((q: AwsAccountListQueryParamsBuilder) => AwsAccountListQueryParamsBuilder)): Promise<PaginationResponse<AwsAccount>> {
    let queryParams: AwsAccountListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AwsAccountListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AwsAccount>>('/encoding/infrastructure/aws', {}, queryParams).then((response) => {
      return new PaginationResponse<AwsAccount>(response, AwsAccount);;
    });
  }
}
