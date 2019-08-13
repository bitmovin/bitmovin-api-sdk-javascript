import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import HttpsInput from '../../../models/HttpsInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {HttpsInputListQueryParams, HttpsInputListQueryParamsBuilder} from './HttpsInputListQueryParams';
import {getType, map} from '../../../common/Mapper';

/**
 * HttpsApi - object-oriented interface
 * @export
 * @class HttpsApi
 * @extends {BaseAPI}
 */
export default class HttpsApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create HTTPS Input
   * @param {HttpsInput} httpsInput The Https input to be created
   * @throws {RequiredError}
   * @memberof HttpsApi
   */
  public create(httpsInput?: HttpsInput): Promise<HttpsInput> {
    return this.restClient.post<HttpsInput>('/encoding/inputs/https', {}, httpsInput).then((response) => {
      return new HttpsInput(response);
    });
  }

  /**
   * @summary Delete HTTPS Input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof HttpsApi
   */
  public delete(inputId: string): Promise<HttpsInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<HttpsInput>('/encoding/inputs/https/{input_id}', pathParamMap).then((response) => {
      return new HttpsInput(response);
    });
  }

  /**
   * @summary HTTPS Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof HttpsApi
   */
  public get(inputId: string): Promise<HttpsInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<HttpsInput>('/encoding/inputs/https/{input_id}', pathParamMap).then((response) => {
      return new HttpsInput(response);
    });
  }

  /**
   * @summary List HTTPS Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof HttpsApi
   */
  public list(queryParameters?: HttpsInputListQueryParams | ((q: HttpsInputListQueryParamsBuilder) => HttpsInputListQueryParamsBuilder)): Promise<PaginationResponse<HttpsInput>> {
    let queryParams: HttpsInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new HttpsInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<HttpsInput>>('/encoding/inputs/https', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<HttpsInput>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new HttpsInput(i));
      }
      return paginationResponse;
    });
  }
}
