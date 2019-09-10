import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import GcsInput from '../../../models/GcsInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {GcsInputListQueryParams, GcsInputListQueryParamsBuilder} from './GcsInputListQueryParams';

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
   * @summary Create GCS Input
   * @param {GcsInput} gcsInput The GcsInput to be created
   * @throws {BitmovinError}
   * @memberof GcsApi
   */
  public create(gcsInput?: GcsInput): Promise<GcsInput> {
    return this.restClient.post<GcsInput>('/encoding/inputs/gcs', {}, gcsInput).then((response) => {
      return map(response, GcsInput);
    });
  }

  /**
   * @summary Delete GCS Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof GcsApi
   */
  public delete(inputId: string): Promise<GcsInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<GcsInput>('/encoding/inputs/gcs/{input_id}', pathParamMap).then((response) => {
      return map(response, GcsInput);
    });
  }

  /**
   * @summary GCS Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof GcsApi
   */
  public get(inputId: string): Promise<GcsInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<GcsInput>('/encoding/inputs/gcs/{input_id}', pathParamMap).then((response) => {
      return map(response, GcsInput);
    });
  }

  /**
   * @summary List GCS Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof GcsApi
   */
  public list(queryParameters?: GcsInputListQueryParams | ((q: GcsInputListQueryParamsBuilder) => GcsInputListQueryParamsBuilder)): Promise<PaginationResponse<GcsInput>> {
    let queryParams: GcsInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new GcsInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<GcsInput>>('/encoding/inputs/gcs', {}, queryParams).then((response) => {
      return new PaginationResponse<GcsInput>(response, GcsInput);
    });
  }
}
