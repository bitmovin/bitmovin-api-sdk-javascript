import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import S3Output from '../../../models/S3Output';
import PaginationResponse from '../../../models/PaginationResponse';
import {S3OutputListQueryParams, S3OutputListQueryParamsBuilder} from './S3OutputListQueryParams';

/**
 * S3Api - object-oriented interface
 * @export
 * @class S3Api
 * @extends {BaseAPI}
 */
export default class S3Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create S3 Output
   * @param {S3Output} s3Output The S3 output to be created  The following permissions are required for S3 output:  * s3:PutObject  * s3:PutObjectAcl  * s3:ListBucket  * s3:GetBucketLocation 
   * @throws {BitmovinError}
   * @memberof S3Api
   */
  public create(s3Output?: S3Output): Promise<S3Output> {
    return this.restClient.post<S3Output>('/encoding/outputs/s3', {}, s3Output).then((response) => {
      return map(response, S3Output);
    });
  }

  /**
   * @summary Delete S3 Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof S3Api
   */
  public delete(outputId: string): Promise<S3Output> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<S3Output>('/encoding/outputs/s3/{output_id}', pathParamMap).then((response) => {
      return map(response, S3Output);
    });
  }

  /**
   * @summary S3 Output Details
   * @param {string} outputId Id of the input
   * @throws {BitmovinError}
   * @memberof S3Api
   */
  public get(outputId: string): Promise<S3Output> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<S3Output>('/encoding/outputs/s3/{output_id}', pathParamMap).then((response) => {
      return map(response, S3Output);
    });
  }

  /**
   * @summary List S3 Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof S3Api
   */
  public list(queryParameters?: S3OutputListQueryParams | ((q: S3OutputListQueryParamsBuilder) => S3OutputListQueryParamsBuilder)): Promise<PaginationResponse<S3Output>> {
    let queryParams: S3OutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new S3OutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<S3Output>>('/encoding/outputs/s3', {}, queryParams).then((response) => {
      return new PaginationResponse<S3Output>(response, S3Output);
    });
  }
}
