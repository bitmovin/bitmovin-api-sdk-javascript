import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AsperaInput from '../../../models/AsperaInput';
import PaginationResponse from '../../../models/PaginationResponse';
import AsperaInputListQueryParams from './AsperaInputListQueryParams';

/**
 * AsperaApi - object-oriented interface
 * @export
 * @class AsperaApi
 * @extends {BaseAPI}
 */
export default class AsperaApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Aspera Input
   * @param {AsperaInput} [asperaInput] The Aspera input to be created
   * @throws {RequiredError}
   * @memberof AsperaApi
   */
  public create(asperaInput?: AsperaInput): Promise<AsperaInput> {
    return this.restClient.post<AsperaInput>('/encoding/inputs/aspera', {}, asperaInput).then((response) => {
      return new AsperaInput(response);
    });
  }

  /**
   * @summary Delete Aspera Input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof AsperaApi
   */
  public delete(inputId: string): Promise<AsperaInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<AsperaInput>('/encoding/inputs/aspera/{input_id}', pathParamMap).then((response) => {
      return new AsperaInput(response);
    });
  }

  /**
   * @summary Aspera Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof AsperaApi
   */
  public get(inputId: string): Promise<AsperaInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<AsperaInput>('/encoding/inputs/aspera/{input_id}', pathParamMap).then((response) => {
      return new AsperaInput(response);
    });
  }

  /**
   * @summary List Aspera Inputs
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AsperaApi
   */
  public list(queryParams?: AsperaInputListQueryParams): Promise<PaginationResponse<AsperaInput>> {
    return this.restClient.get<PaginationResponse<AsperaInput>>('/encoding/inputs/aspera', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AsperaInput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AsperaInput(i));
      }
      return paginationResponse;
    });
  }
}
