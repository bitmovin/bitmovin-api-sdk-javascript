import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import EnhancedDeinterlaceFilter from '../../../models/EnhancedDeinterlaceFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {EnhancedDeinterlaceFilterListQueryParams, EnhancedDeinterlaceFilterListQueryParamsBuilder} from './EnhancedDeinterlaceFilterListQueryParams';

/**
 * EnhancedDeinterlaceApi - object-oriented interface
 * @export
 * @class EnhancedDeinterlaceApi
 * @extends {BaseAPI}
 */
export default class EnhancedDeinterlaceApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Enhanced Deinterlace Filter
   * @param {EnhancedDeinterlaceFilter} enhancedDeinterlaceFilter The Enhanced Deinterlace Filter to be created
   * @throws {BitmovinError}
   * @memberof EnhancedDeinterlaceApi
   */
  public create(enhancedDeinterlaceFilter?: EnhancedDeinterlaceFilter): Promise<EnhancedDeinterlaceFilter> {
    return this.restClient.post<EnhancedDeinterlaceFilter>('/encoding/filters/enhanced-deinterlace', {}, enhancedDeinterlaceFilter).then((response) => {
      return map(response, EnhancedDeinterlaceFilter);
    });
  }

  /**
   * @summary Delete Enhanced Deinterlace Filter
   * @param {string} filterId Id of the Enhanced Deinterlace Filter
   * @throws {BitmovinError}
   * @memberof EnhancedDeinterlaceApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/enhanced-deinterlace/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Enhanced Deinterlace Filter Details
   * @param {string} filterId Id of the Enhanced Deinterlace Filter
   * @throws {BitmovinError}
   * @memberof EnhancedDeinterlaceApi
   */
  public get(filterId: string): Promise<EnhancedDeinterlaceFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<EnhancedDeinterlaceFilter>('/encoding/filters/enhanced-deinterlace/{filter_id}', pathParamMap).then((response) => {
      return map(response, EnhancedDeinterlaceFilter);
    });
  }

  /**
   * @summary List Enhanced Deinterlace Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof EnhancedDeinterlaceApi
   */
  public list(queryParameters?: EnhancedDeinterlaceFilterListQueryParams | ((q: EnhancedDeinterlaceFilterListQueryParamsBuilder) => EnhancedDeinterlaceFilterListQueryParamsBuilder)): Promise<PaginationResponse<EnhancedDeinterlaceFilter>> {
    let queryParams: EnhancedDeinterlaceFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EnhancedDeinterlaceFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EnhancedDeinterlaceFilter>>('/encoding/filters/enhanced-deinterlace', {}, queryParams).then((response) => {
      return new PaginationResponse<EnhancedDeinterlaceFilter>(response, EnhancedDeinterlaceFilter);
    });
  }
}
