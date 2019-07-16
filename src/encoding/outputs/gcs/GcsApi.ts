import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import GcsOutput from '../../../models/GcsOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import { GcsOutputListQueryParams, GcsOutputListQueryParamsBuilder } from './GcsOutputListQueryParams';

/**
 * GcsApi - object-oriented interface
 * @export
 * @class GcsApi
 * @extends {BaseAPI}
 */
export default class GcsApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create GCS Output
   * @param {GcsOutput} gcsOutput The GCS output to be created
   * @throws {RequiredError}
   * @memberof GcsApi
   */
  public create(gcsOutput?: GcsOutput): Promise<GcsOutput> {
    return this.restClient.post<GcsOutput>('/encoding/outputs/gcs', {}, gcsOutput).then((response) => {
      return new GcsOutput(response);
    });
  }

  /**
   * @summary Delete GCS Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof GcsApi
   */
  public delete(outputId: string): Promise<GcsOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<GcsOutput>('/encoding/outputs/gcs/{output_id}', pathParamMap).then((response) => {
      return new GcsOutput(response);
    });
  }

  /**
   * @summary GCS Output Details
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof GcsApi
   */
  public get(outputId: string): Promise<GcsOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<GcsOutput>('/encoding/outputs/gcs/{output_id}', pathParamMap).then((response) => {
      return new GcsOutput(response);
    });
  }

  /**
   * @summary List GCS Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof GcsApi
   */
  public list(queryParameters?: GcsOutputListQueryParams | ((q: GcsOutputListQueryParamsBuilder) => GcsOutputListQueryParamsBuilder)): Promise<PaginationResponse<GcsOutput>> {
    let queryParams: GcsOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new GcsOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<GcsOutput>>('/encoding/outputs/gcs', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<GcsOutput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new GcsOutput(i));
      }
      return paginationResponse;
    });
  }
}
