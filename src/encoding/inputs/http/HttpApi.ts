import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import HttpInput from '../../../models/HttpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import HttpInputListQueryParams from './HttpInputListQueryParams';

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
   * @throws {RequiredError}
   * @memberof HttpApi
   */
  public create(httpInput?: HttpInput): Promise<HttpInput> {
    return this.restClient.post<HttpInput>('/encoding/inputs/http', {}, httpInput).then((response) => {
      return new HttpInput(response);
    });
  }

  /**
   * @summary Delete HTTP Input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof HttpApi
   */
  public delete(inputId: string): Promise<HttpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<HttpInput>('/encoding/inputs/http/{input_id}', pathParamMap).then((response) => {
      return new HttpInput(response);
    });
  }

  /**
   * @summary HTTP Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof HttpApi
   */
  public get(inputId: string): Promise<HttpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<HttpInput>('/encoding/inputs/http/{input_id}', pathParamMap).then((response) => {
      return new HttpInput(response);
    });
  }

  /**
   * @summary List HTTP Inputs
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof HttpApi
   */
  public list(queryParams?: HttpInputListQueryParams): Promise<PaginationResponse<HttpInput>> {
    return this.restClient.get<PaginationResponse<HttpInput>>('/encoding/inputs/http', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<HttpInput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new HttpInput(i));
      }
      return paginationResponse;
    });
  }
}
