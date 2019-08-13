import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import LocalInput from '../../../models/LocalInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {LocalInputListQueryParams, LocalInputListQueryParamsBuilder} from './LocalInputListQueryParams';
import {getType, map} from '../../../common/Mapper';

/**
 * LocalApi - object-oriented interface
 * @export
 * @class LocalApi
 * @extends {BaseAPI}
 */
export default class LocalApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Local Input
   * @param {LocalInput} localInput The LocalInput to be created.
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public create(localInput?: LocalInput): Promise<LocalInput> {
    return this.restClient.post<LocalInput>('/encoding/inputs/local', {}, localInput).then((response) => {
      return new LocalInput(response);
    });
  }

  /**
   * @summary Delete Local Input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public delete(inputId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/inputs/local/{input_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Local Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public get(inputId: string): Promise<LocalInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<LocalInput>('/encoding/inputs/local/{input_id}', pathParamMap).then((response) => {
      return new LocalInput(response);
    });
  }

  /**
   * @summary List Local Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public list(queryParameters?: LocalInputListQueryParams | ((q: LocalInputListQueryParamsBuilder) => LocalInputListQueryParamsBuilder)): Promise<PaginationResponse<LocalInput>> {
    let queryParams: LocalInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LocalInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LocalInput>>('/encoding/inputs/local', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<LocalInput>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new LocalInput(i));
      }
      return paginationResponse;
    });
  }
}
