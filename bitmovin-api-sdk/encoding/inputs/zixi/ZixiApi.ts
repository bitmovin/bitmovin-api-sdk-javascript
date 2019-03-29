import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import ZixiInput from '../../../models/ZixiInput';
import PaginationResponse from '../../../models/PaginationResponse';
import ZixiInputListQueryParams from './ZixiInputListQueryParams';

/**
 * ZixiApi - object-oriented interface
 * @export
 * @class ZixiApi
 * @extends {BaseAPI}
 */
export default class ZixiApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Zixi input
   * @param {ZixiInput} [zixiInput] The ZixiInput to be created
   * @throws {RequiredError}
   * @memberof ZixiApi
   */
  public create(zixiInput?: ZixiInput): Promise<ZixiInput> {
    return this.restClient.post<ZixiInput>('/encoding/inputs/zixi', {}, zixiInput).then((response) => {
      return new ZixiInput(response);
    });
  }

  /**
   * @summary Delete Zixi input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof ZixiApi
   */
  public delete(inputId: string): Promise<ZixiInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<ZixiInput>('/encoding/inputs/zixi/{input_id}', pathParamMap).then((response) => {
      return new ZixiInput(response);
    });
  }

  /**
   * @summary Zixi Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof ZixiApi
   */
  public get(inputId: string): Promise<ZixiInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<ZixiInput>('/encoding/inputs/zixi/{input_id}', pathParamMap).then((response) => {
      return new ZixiInput(response);
    });
  }

  /**
   * @summary List Zixi inputs
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ZixiApi
   */
  public list(queryParams?: ZixiInputListQueryParams): Promise<PaginationResponse<ZixiInput>> {
    return this.restClient.get<PaginationResponse<ZixiInput>>('/encoding/inputs/zixi', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ZixiInput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ZixiInput(i));
      }
      return paginationResponse;
    });
  }
}
