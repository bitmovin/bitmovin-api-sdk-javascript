import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import GcsServiceAccountInput from '../../../models/GcsServiceAccountInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {GcsServiceAccountInputListQueryParams, GcsServiceAccountInputListQueryParamsBuilder} from './GcsServiceAccountInputListQueryParams';

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
   * @summary Create Service Account based GCS Input
   * @param {GcsServiceAccountInput} gcsServiceAccountInput The GcsInput to be created
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public create(gcsServiceAccountInput?: GcsServiceAccountInput): Promise<GcsServiceAccountInput> {
    return this.restClient.post<GcsServiceAccountInput>('/encoding/inputs/gcs-service-account', {}, gcsServiceAccountInput).then((response) => {
      return map(response, GcsServiceAccountInput);
    });
  }

  /**
   * @summary Delete Service Account based GCS Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public delete(inputId: string): Promise<GcsServiceAccountInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<GcsServiceAccountInput>('/encoding/inputs/gcs-service-account/{input_id}', pathParamMap).then((response) => {
      return map(response, GcsServiceAccountInput);
    });
  }

  /**
   * @summary List Service Account based GCS Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public get(inputId: string): Promise<GcsServiceAccountInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<GcsServiceAccountInput>('/encoding/inputs/gcs-service-account/{input_id}', pathParamMap).then((response) => {
      return map(response, GcsServiceAccountInput);
    });
  }

  /**
   * @summary List Service Account based GCS Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof GcsServiceAccountApi
   */
  public list(queryParameters?: GcsServiceAccountInputListQueryParams | ((q: GcsServiceAccountInputListQueryParamsBuilder) => GcsServiceAccountInputListQueryParamsBuilder)): Promise<PaginationResponse<GcsServiceAccountInput>> {
    let queryParams: GcsServiceAccountInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new GcsServiceAccountInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<GcsServiceAccountInput>>('/encoding/inputs/gcs-service-account', {}, queryParams).then((response) => {
      return new PaginationResponse<GcsServiceAccountInput>(response, GcsServiceAccountInput);
    });
  }
}
