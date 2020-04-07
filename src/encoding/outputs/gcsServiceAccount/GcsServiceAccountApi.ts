import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import GcsServiceAccountOutput from '../../../models/GcsServiceAccountOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {GcsServiceAccountOutputListQueryParams, GcsServiceAccountOutputListQueryParamsBuilder} from './GcsServiceAccountOutputListQueryParams';

/**
 * GcsServiceAccountApi - object-oriented interface
 * @export
 * @class GcsServiceAccountApi
 * @extends {BaseAPI}
 */
export default class GcsServiceAccountApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Service Account based GCS Output
   * @param {GcsServiceAccountOutput} gcsServiceAccountOutput The GCS output to be created
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public create(gcsServiceAccountOutput?: GcsServiceAccountOutput): Promise<GcsServiceAccountOutput> {
    return this.restClient.post<GcsServiceAccountOutput>('/encoding/outputs/gcs-service-account', {}, gcsServiceAccountOutput).then((response) => {
      return map(response, GcsServiceAccountOutput);
    });
  }

  /**
   * @summary Delete Service Account based GCS Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public delete(outputId: string): Promise<GcsServiceAccountOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<GcsServiceAccountOutput>('/encoding/outputs/gcs-service-account/{output_id}', pathParamMap).then((response) => {
      return map(response, GcsServiceAccountOutput);
    });
  }

  /**
   * @summary Service Account based GCS Output Details
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public get(outputId: string): Promise<GcsServiceAccountOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<GcsServiceAccountOutput>('/encoding/outputs/gcs-service-account/{output_id}', pathParamMap).then((response) => {
      return map(response, GcsServiceAccountOutput);
    });
  }

  /**
   * @summary List Service Account based GCS Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public list(queryParameters?: GcsServiceAccountOutputListQueryParams | ((q: GcsServiceAccountOutputListQueryParamsBuilder) => GcsServiceAccountOutputListQueryParamsBuilder)): Promise<PaginationResponse<GcsServiceAccountOutput>> {
    let queryParams: GcsServiceAccountOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new GcsServiceAccountOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<GcsServiceAccountOutput>>('/encoding/outputs/gcs-service-account', {}, queryParams).then((response) => {
      return new PaginationResponse<GcsServiceAccountOutput>(response, GcsServiceAccountOutput);
    });
  }
}
