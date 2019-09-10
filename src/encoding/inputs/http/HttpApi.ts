import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import HttpInput from '../../../models/HttpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {HttpInputListQueryParams, HttpInputListQueryParamsBuilder} from './HttpInputListQueryParams';

/**
 * HttpApi - object-oriented interface
 * @export
 * @class HttpApi
 * @extends {BaseAPI}
 */
export default class HttpApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create HTTP Input
   * @param {HttpInput} httpInput The HTTP input to be created
   * @throws {BitmovinError}
   * @memberof HttpApi
   */
  public create(httpInput?: HttpInput): Promise<HttpInput> {
    return this.restClient.post<HttpInput>('/encoding/inputs/http', {}, httpInput).then((response) => {
      return map(response, HttpInput);
    });
  }

  /**
   * @summary Delete HTTP Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof HttpApi
   */
  public delete(inputId: string): Promise<HttpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<HttpInput>('/encoding/inputs/http/{input_id}', pathParamMap).then((response) => {
      return map(response, HttpInput);
    });
  }

  /**
   * @summary HTTP Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof HttpApi
   */
  public get(inputId: string): Promise<HttpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<HttpInput>('/encoding/inputs/http/{input_id}', pathParamMap).then((response) => {
      return map(response, HttpInput);
    });
  }

  /**
   * @summary List HTTP Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof HttpApi
   */
  public list(queryParameters?: HttpInputListQueryParams | ((q: HttpInputListQueryParamsBuilder) => HttpInputListQueryParamsBuilder)): Promise<PaginationResponse<HttpInput>> {
    let queryParams: HttpInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new HttpInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<HttpInput>>('/encoding/inputs/http', {}, queryParams).then((response) => {
      return new PaginationResponse<HttpInput>(response, HttpInput);
    });
  }
}
