import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import S3RoleBasedInput from '../../../models/S3RoleBasedInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {S3RoleBasedInputListQueryParams, S3RoleBasedInputListQueryParamsBuilder} from './S3RoleBasedInputListQueryParams';

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
   * @summary Create S3 Role-based Input
   * @param {S3RoleBasedInput} s3RoleBasedInput The S3 Role-based input to be created  The following permissions are required for S3 Role-based input:   * s3:GetObject   * s3:GetBucketLocation, 
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public create(s3RoleBasedInput?: S3RoleBasedInput): Promise<S3RoleBasedInput> {
    return this.restClient.post<S3RoleBasedInput>('/encoding/inputs/s3-role-based', {}, s3RoleBasedInput).then((response) => {
      return map(response, S3RoleBasedInput);
    });
  }

  /**
   * @summary Delete S3 Role-based Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public delete(inputId: string): Promise<S3RoleBasedInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<S3RoleBasedInput>('/encoding/inputs/s3-role-based/{input_id}', pathParamMap).then((response) => {
      return map(response, S3RoleBasedInput);
    });
  }

  /**
   * @summary S3 Role-based Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public get(inputId: string): Promise<S3RoleBasedInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<S3RoleBasedInput>('/encoding/inputs/s3-role-based/{input_id}', pathParamMap).then((response) => {
      return map(response, S3RoleBasedInput);
    });
  }

  /**
   * @summary List S3 Role-based Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof S3RoleBasedApi
   */
  public list(queryParameters?: S3RoleBasedInputListQueryParams | ((q: S3RoleBasedInputListQueryParamsBuilder) => S3RoleBasedInputListQueryParamsBuilder)): Promise<PaginationResponse<S3RoleBasedInput>> {
    let queryParams: S3RoleBasedInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new S3RoleBasedInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<S3RoleBasedInput>>('/encoding/inputs/s3-role-based', {}, queryParams).then((response) => {
      return new PaginationResponse<S3RoleBasedInput>(response, S3RoleBasedInput);
    });
  }
}
