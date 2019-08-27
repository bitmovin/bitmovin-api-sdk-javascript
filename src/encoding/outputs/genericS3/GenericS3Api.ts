import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import GenericS3Output from '../../../models/GenericS3Output';
import PaginationResponse from '../../../models/PaginationResponse';
import {GenericS3OutputListQueryParams, GenericS3OutputListQueryParamsBuilder} from './GenericS3OutputListQueryParams';

/**
 * GenericS3Api - object-oriented interface
 * @export
 * @class GenericS3Api
 * @extends {BaseAPI}
 */
export default class GenericS3Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Generic S3 Output
   * @param {GenericS3Output} genericS3Output The Generic S3 output to be created
   * @throws {RequiredError}
   * @memberof GenericS3Api
   */
  public create(genericS3Output?: GenericS3Output): Promise<GenericS3Output> {
    return this.restClient.post<GenericS3Output>('/encoding/outputs/generic-s3', {}, genericS3Output).then((response) => {
      return new GenericS3Output(response);
    });
  }

  /**
   * @summary Delete Generic S3 Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof GenericS3Api
   */
  public delete(outputId: string): Promise<GenericS3Output> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<GenericS3Output>('/encoding/outputs/generic-s3/{output_id}', pathParamMap).then((response) => {
      return new GenericS3Output(response);
    });
  }

  /**
   * @summary Generic S3 Output Details
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof GenericS3Api
   */
  public get(outputId: string): Promise<GenericS3Output> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<GenericS3Output>('/encoding/outputs/generic-s3/{output_id}', pathParamMap).then((response) => {
      return new GenericS3Output(response);
    });
  }

  /**
   * @summary List Generic S3 Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof GenericS3Api
   */
  public list(queryParameters?: GenericS3OutputListQueryParams | ((q: GenericS3OutputListQueryParamsBuilder) => GenericS3OutputListQueryParamsBuilder)): Promise<PaginationResponse<GenericS3Output>> {
    let queryParams: GenericS3OutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new GenericS3OutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<GenericS3Output>>('/encoding/outputs/generic-s3', {}, queryParams).then((response) => {
      return new PaginationResponse<GenericS3Output>(response, GenericS3Output);;
    });
  }
}
