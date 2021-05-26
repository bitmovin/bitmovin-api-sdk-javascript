import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import AnalyticsAzureOutput from '../../../models/AnalyticsAzureOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {AnalyticsAzureOutputListQueryParams, AnalyticsAzureOutputListQueryParamsBuilder} from './AnalyticsAzureOutputListQueryParams';

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
   * @summary Create Microsoft Azure Output
   * @param {AnalyticsAzureOutput} analyticsAzureOutput The Microsoft Azure output to be created
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public create(analyticsAzureOutput?: AnalyticsAzureOutput): Promise<AnalyticsAzureOutput> {
    return this.restClient.post<AnalyticsAzureOutput>('/analytics/outputs/azure', {}, analyticsAzureOutput).then((response) => {
      return map(response, AnalyticsAzureOutput);
    });
  }

  /**
   * @summary Delete Microsoft Azure Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public delete(outputId: string): Promise<AnalyticsAzureOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<AnalyticsAzureOutput>('/analytics/outputs/azure/{output_id}', pathParamMap).then((response) => {
      return map(response, AnalyticsAzureOutput);
    });
  }

  /**
   * @summary Microsoft Azure Output Details
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public get(outputId: string): Promise<AnalyticsAzureOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<AnalyticsAzureOutput>('/analytics/outputs/azure/{output_id}', pathParamMap).then((response) => {
      return map(response, AnalyticsAzureOutput);
    });
  }

  /**
   * @summary List Microsoft Azure Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AzureApi
   */
  public list(queryParameters?: AnalyticsAzureOutputListQueryParams | ((q: AnalyticsAzureOutputListQueryParamsBuilder) => AnalyticsAzureOutputListQueryParamsBuilder)): Promise<PaginationResponse<AnalyticsAzureOutput>> {
    let queryParams: AnalyticsAzureOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AnalyticsAzureOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AnalyticsAzureOutput>>('/analytics/outputs/azure', {}, queryParams).then((response) => {
      return new PaginationResponse<AnalyticsAzureOutput>(response, AnalyticsAzureOutput);
    });
  }
}
