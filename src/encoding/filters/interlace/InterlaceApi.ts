import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import InterlaceFilter from '../../../models/InterlaceFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {InterlaceFilterListQueryParams, InterlaceFilterListQueryParamsBuilder} from './InterlaceFilterListQueryParams';

/**
 * InterlaceApi - object-oriented interface
 * @export
 * @class InterlaceApi
 * @extends {BaseAPI}
 */
export default class InterlaceApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Interlace Filter
   * @param {InterlaceFilter} interlaceFilter The Interlace Filter to be created
   * @throws {RequiredError}
   * @memberof InterlaceApi
   */
  public create(interlaceFilter?: InterlaceFilter): Promise<InterlaceFilter> {
    return this.restClient.post<InterlaceFilter>('/encoding/filters/interlace', {}, interlaceFilter).then((response) => {
      return new InterlaceFilter(response);
    });
  }

  /**
   * @summary Delete Interlace Filter
   * @param {string} filterId Id of the Interlace Filter
   * @throws {RequiredError}
   * @memberof InterlaceApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/interlace/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Interlace Filter Details
   * @param {string} filterId Id of the Interlace Filter
   * @throws {RequiredError}
   * @memberof InterlaceApi
   */
  public get(filterId: string): Promise<InterlaceFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<InterlaceFilter>('/encoding/filters/interlace/{filter_id}', pathParamMap).then((response) => {
      return new InterlaceFilter(response);
    });
  }

  /**
   * @summary List Interlace Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof InterlaceApi
   */
  public list(queryParameters?: InterlaceFilterListQueryParams | ((q: InterlaceFilterListQueryParamsBuilder) => InterlaceFilterListQueryParamsBuilder)): Promise<PaginationResponse<InterlaceFilter>> {
    let queryParams: InterlaceFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new InterlaceFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<InterlaceFilter>>('/encoding/filters/interlace', {}, queryParams).then((response) => {
      return new PaginationResponse<InterlaceFilter>(response, InterlaceFilter);;
    });
  }
}
