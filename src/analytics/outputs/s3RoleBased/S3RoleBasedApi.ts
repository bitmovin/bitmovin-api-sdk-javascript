import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import AnalyticsS3RoleBasedOutput from '../../../models/AnalyticsS3RoleBasedOutput';
import S3RoleBasedOutput from '../../../models/S3RoleBasedOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {AnalyticsS3RoleBasedOutputListQueryParams, AnalyticsS3RoleBasedOutputListQueryParamsBuilder} from './AnalyticsS3RoleBasedOutputListQueryParams';

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
   * @param {AnalyticsS3RoleBasedOutput} analyticsS3RoleBasedOutput The S3 Role-based output to be created
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public create(analyticsS3RoleBasedOutput?: AnalyticsS3RoleBasedOutput): Promise<AnalyticsS3RoleBasedOutput> {
    return this.restClient.post<AnalyticsS3RoleBasedOutput>('/analytics/outputs/s3-role-based', {}, analyticsS3RoleBasedOutput).then((response) => {
      return map(response, AnalyticsS3RoleBasedOutput);
    });
  }

  /**
   * @summary Delete S3 Role-based Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public delete(outputId: string): Promise<S3RoleBasedOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<S3RoleBasedOutput>('/analytics/outputs/s3-role-based/{output_id}', pathParamMap).then((response) => {
      return map(response, S3RoleBasedOutput);
    });
  }

  /**
   * @summary S3 Role-based Output Details
   * @param {string} outputId Id of the input
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public get(outputId: string): Promise<S3RoleBasedOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<S3RoleBasedOutput>('/analytics/outputs/s3-role-based/{output_id}', pathParamMap).then((response) => {
      return map(response, S3RoleBasedOutput);
    });
  }

  /**
   * @summary List S3 Role-based Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public list(queryParameters?: AnalyticsS3RoleBasedOutputListQueryParams | ((q: AnalyticsS3RoleBasedOutputListQueryParamsBuilder) => AnalyticsS3RoleBasedOutputListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsS3RoleBasedOutput>> {
    let queryParams: AnalyticsS3RoleBasedOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsS3RoleBasedOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsS3RoleBasedOutput>>('/analytics/outputs/s3-role-based', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsS3RoleBasedOutput>(response, AnalyticsS3RoleBasedOutput);
    });
  }
}
