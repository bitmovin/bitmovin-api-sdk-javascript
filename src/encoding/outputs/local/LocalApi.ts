import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import LocalOutput from '../../../models/LocalOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {LocalOutputListQueryParams, LocalOutputListQueryParamsBuilder} from './LocalOutputListQueryParams';
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
   * @summary Create Local Output
   * @param {LocalOutput} localOutput The Local output to be created
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public create(localOutput?: LocalOutput): Promise<LocalOutput> {
    return this.restClient.post<LocalOutput>('/encoding/outputs/local', {}, localOutput).then((response) => {
      return new LocalOutput(response);
    });
  }

  /**
   * @summary Delete Local Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public delete(outputId: string): Promise<LocalOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<LocalOutput>('/encoding/outputs/local/{output_id}', pathParamMap).then((response) => {
      return new LocalOutput(response);
    });
  }

  /**
   * @summary Local Output Details
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public get(outputId: string): Promise<LocalOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<LocalOutput>('/encoding/outputs/local/{output_id}', pathParamMap).then((response) => {
      return new LocalOutput(response);
    });
  }

  /**
   * @summary List Local Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LocalApi
   */
  public list(queryParameters?: LocalOutputListQueryParams | ((q: LocalOutputListQueryParamsBuilder) => LocalOutputListQueryParamsBuilder)): Promise<PaginationResponse<LocalOutput>> {
    let queryParams: LocalOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LocalOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LocalOutput>>('/encoding/outputs/local', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<LocalOutput>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new LocalOutput(i));
      }
      return paginationResponse;
    });
  }
}
