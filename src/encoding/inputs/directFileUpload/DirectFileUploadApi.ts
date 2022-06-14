import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import DirectFileUploadInput from '../../../models/DirectFileUploadInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {DirectFileUploadInputListQueryParams, DirectFileUploadInputListQueryParamsBuilder} from './DirectFileUploadInputListQueryParams';

/**
 * DirectFileUploadApi - object-oriented interface
 * @export
 * @class DirectFileUploadApi
 * @extends {BaseAPI}
 */
export default class DirectFileUploadApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Direct File Upload Input
   * @param {DirectFileUploadInput} directFileUploadInput The Direct File Upload input to be created
   * @throws {BitmovinError}
   * @memberof DirectFileUploadApi
   */
  public create(directFileUploadInput?: DirectFileUploadInput): Promise<DirectFileUploadInput> {
    return this.restClient.post<DirectFileUploadInput>('/encoding/inputs/direct-file-upload', {}, directFileUploadInput).then((response) => {
      return map(response, DirectFileUploadInput);
    });
  }

  /**
   * @summary Delete Direct File Upload Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof DirectFileUploadApi
   */
  public delete(inputId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/inputs/direct-file-upload/{input_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Direct File Upload Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof DirectFileUploadApi
   */
  public get(inputId: string): Promise<DirectFileUploadInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<DirectFileUploadInput>('/encoding/inputs/direct-file-upload/{input_id}', pathParamMap).then((response) => {
      return map(response, DirectFileUploadInput);
    });
  }

  /**
   * @summary List Direct File Upload Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DirectFileUploadApi
   */
  public list(queryParameters?: DirectFileUploadInputListQueryParams | ((q: DirectFileUploadInputListQueryParamsBuilder) => DirectFileUploadInputListQueryParamsBuilder)): Promise<PaginationResponse<DirectFileUploadInput>> {
    let queryParams: DirectFileUploadInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DirectFileUploadInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DirectFileUploadInput>>('/encoding/inputs/direct-file-upload', {}, queryParams).then((response) => {
      return new PaginationResponse<DirectFileUploadInput>(response, DirectFileUploadInput);
    });
  }
}
