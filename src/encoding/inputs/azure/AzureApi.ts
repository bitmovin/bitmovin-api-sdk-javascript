import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import AzureInput from '../../../models/AzureInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {AzureInputListQueryParams, AzureInputListQueryParamsBuilder} from './AzureInputListQueryParams';

/**
 * AzureApi - object-oriented interface
 * @export
 * @class AzureApi
 * @extends {BaseAPI}
 */
export default class AzureApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Azure Input
   * @param {AzureInput} azureInput The Azure input to be created
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public create(azureInput?: AzureInput): Promise<AzureInput> {
    return this.restClient.post<AzureInput>('/encoding/inputs/azure', {}, azureInput).then((response) => {
      return map(response, AzureInput);
    });
  }

  /**
   * @summary Delete Azure Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public delete(inputId: string): Promise<AzureInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<AzureInput>('/encoding/inputs/azure/{input_id}', pathParamMap).then((response) => {
      return map(response, AzureInput);
    });
  }

  /**
   * @summary Azure Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public get(inputId: string): Promise<AzureInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<AzureInput>('/encoding/inputs/azure/{input_id}', pathParamMap).then((response) => {
      return map(response, AzureInput);
    });
  }

  /**
   * @summary List Azure Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public list(queryParameters?: AzureInputListQueryParams | ((q: AzureInputListQueryParamsBuilder) => AzureInputListQueryParamsBuilder)): Promise<PaginationResponse<AzureInput>> {
    let queryParams: AzureInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AzureInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AzureInput>>('/encoding/inputs/azure', {}, queryParams).then((response) => {
      return new PaginationResponse<AzureInput>(response, AzureInput);
    });
  }
}
