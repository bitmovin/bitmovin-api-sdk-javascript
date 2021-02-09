import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import AnalyticsGcsServiceAccountOutput from '../../../models/AnalyticsGcsServiceAccountOutput';
import GcsServiceAccountOutput from '../../../models/GcsServiceAccountOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {AnalyticsGcsServiceAccountOutputListQueryParams, AnalyticsGcsServiceAccountOutputListQueryParamsBuilder} from './AnalyticsGcsServiceAccountOutputListQueryParams';

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
   * @param {AnalyticsGcsServiceAccountOutput} analyticsGcsServiceAccountOutput The GCS output to be created
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public create(analyticsGcsServiceAccountOutput?: AnalyticsGcsServiceAccountOutput): Promise<AnalyticsGcsServiceAccountOutput> {
    return this.restClient.post<AnalyticsGcsServiceAccountOutput>('/analytics/outputs/gcs-service-account', {}, analyticsGcsServiceAccountOutput).then((response) => {
      return map(response, AnalyticsGcsServiceAccountOutput);
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
    return this.restClient.delete<GcsServiceAccountOutput>('/analytics/outputs/gcs-service-account/{output_id}', pathParamMap).then((response) => {
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
    return this.restClient.get<GcsServiceAccountOutput>('/analytics/outputs/gcs-service-account/{output_id}', pathParamMap).then((response) => {
      return map(response, GcsServiceAccountOutput);
    });
  }

  /**
   * @summary List Service Account based GCS Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public list(queryParameters?: AnalyticsGcsServiceAccountOutputListQueryParams | ((q: AnalyticsGcsServiceAccountOutputListQueryParamsBuilder) => AnalyticsGcsServiceAccountOutputListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsGcsServiceAccountOutput>> {
    let queryParams: AnalyticsGcsServiceAccountOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsGcsServiceAccountOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsGcsServiceAccountOutput>>('/analytics/outputs/gcs-service-account', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsGcsServiceAccountOutput>(response, AnalyticsGcsServiceAccountOutput);
    });
  }
}
