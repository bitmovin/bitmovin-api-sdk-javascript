import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AzureOutput from '../../../models/AzureOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {AzureOutputListQueryParams, AzureOutputListQueryParamsBuilder} from './AzureOutputListQueryParams';
import {getType, map} from '../../../common/Mapper';

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
   * @summary Create Azure Output
   * @param {AzureOutput} azureOutput The Azure output to be created
   * @throws {RequiredError}
   * @memberof AzureApi
   */
  public create(azureOutput?: AzureOutput): Promise<AzureOutput> {
    return this.restClient.post<AzureOutput>('/encoding/outputs/azure', {}, azureOutput).then((response) => {
      return new AzureOutput(response);
    });
  }

  /**
   * @summary Delete Azure Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof AzureApi
   */
  public delete(outputId: string): Promise<AzureOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<AzureOutput>('/encoding/outputs/azure/{output_id}', pathParamMap).then((response) => {
      return new AzureOutput(response);
    });
  }

  /**
   * @summary Azure Output Details
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof AzureApi
   */
  public get(outputId: string): Promise<AzureOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<AzureOutput>('/encoding/outputs/azure/{output_id}', pathParamMap).then((response) => {
      return new AzureOutput(response);
    });
  }

  /**
   * @summary List Azure Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AzureApi
   */
  public list(queryParameters?: AzureOutputListQueryParams | ((q: AzureOutputListQueryParamsBuilder) => AzureOutputListQueryParamsBuilder)): Promise<PaginationResponse<AzureOutput>> {
    let queryParams: AzureOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AzureOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AzureOutput>>('/encoding/outputs/azure', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AzureOutput>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AzureOutput(i));
      }
      return paginationResponse;
    });
  }
}
