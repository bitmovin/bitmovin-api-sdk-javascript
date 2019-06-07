import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import SrtInput from '../../../models/SrtInput';
import PaginationResponse from '../../../models/PaginationResponse';
import SrtInputListQueryParams from './SrtInputListQueryParams';

/**
 * SrtApi - object-oriented interface
 * @export
 * @class SrtApi
 * @extends {BaseAPI}
 */
export default class SrtApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create SRT input
   * @param {SrtInput} srtInput The SrtInput to be created
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public create(srtInput?: SrtInput): Promise<SrtInput> {
    return this.restClient.post<SrtInput>('/encoding/inputs/srt', {}, srtInput).then((response) => {
      return new SrtInput(response);
    });
  }

  /**
   * @summary Delete SRT input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public delete(inputId: string): Promise<SrtInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<SrtInput>('/encoding/inputs/srt/{input_id}', pathParamMap).then((response) => {
      return new SrtInput(response);
    });
  }

  /**
   * @summary SRT Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public get(inputId: string): Promise<SrtInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<SrtInput>('/encoding/inputs/srt/{input_id}', pathParamMap).then((response) => {
      return new SrtInput(response);
    });
  }

  /**
   * @summary List SRT inputs
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public list(queryParams?: SrtInputListQueryParams): Promise<PaginationResponse<SrtInput>> {
    return this.restClient.get<PaginationResponse<SrtInput>>('/encoding/inputs/srt', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SrtInput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SrtInput(i));
      }
      return paginationResponse;
    });
  }
}
