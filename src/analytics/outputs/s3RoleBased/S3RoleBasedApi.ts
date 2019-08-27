import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import S3RoleBasedOutput from '../../../models/S3RoleBasedOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {S3RoleBasedOutputListQueryParams, S3RoleBasedOutputListQueryParamsBuilder} from './S3RoleBasedOutputListQueryParams';

/**
 * S3RoleBasedApi - object-oriented interface
 * @export
 * @class S3RoleBasedApi
 * @extends {BaseAPI}
 */
export default class S3RoleBasedApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create S3 Role-based Output
   * @param {S3RoleBasedOutput} s3RoleBasedOutput The S3 Role-based output to be created
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public create(s3RoleBasedOutput?: S3RoleBasedOutput): Promise<S3RoleBasedOutput> {
    return this.restClient.post<S3RoleBasedOutput>('/analytics/outputs/s3-role-based', {}, s3RoleBasedOutput).then((response) => {
      return new S3RoleBasedOutput(response);
    });
  }

  /**
   * @summary Delete S3 Role-based Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public delete(outputId: string): Promise<S3RoleBasedOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<S3RoleBasedOutput>('/analytics/outputs/s3-role-based/{output_id}', pathParamMap).then((response) => {
      return new S3RoleBasedOutput(response);
    });
  }

  /**
   * @summary S3 Role-based Output Details
   * @param {string} outputId Id of the input
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public get(outputId: string): Promise<S3RoleBasedOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<S3RoleBasedOutput>('/analytics/outputs/s3-role-based/{output_id}', pathParamMap).then((response) => {
      return new S3RoleBasedOutput(response);
    });
  }

  /**
   * @summary List S3 Role-based Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public list(queryParameters?: S3RoleBasedOutputListQueryParams | ((q: S3RoleBasedOutputListQueryParamsBuilder) => S3RoleBasedOutputListQueryParamsBuilder)): Promise<PaginationResponse<S3RoleBasedOutput>> {
    let queryParams: S3RoleBasedOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new S3RoleBasedOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<S3RoleBasedOutput>>('/analytics/outputs/s3-role-based', {}, queryParams).then((response) => {
      return new PaginationResponse<S3RoleBasedOutput>(response, S3RoleBasedOutput);;
    });
  }
}
