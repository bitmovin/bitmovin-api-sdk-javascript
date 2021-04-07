import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import EnhancedWatermarkFilter from '../../../models/EnhancedWatermarkFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {EnhancedWatermarkFilterListQueryParams, EnhancedWatermarkFilterListQueryParamsBuilder} from './EnhancedWatermarkFilterListQueryParams';

/**
 * EnhancedWatermarkApi - object-oriented interface
 * @export
 * @class EnhancedWatermarkApi
 * @extends {BaseAPI}
 */
export default class EnhancedWatermarkApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Enhanced Watermark Filter
   * @param {EnhancedWatermarkFilter} enhancedWatermarkFilter The Enhanced Watermark Filter to be created. Only one horizontal and one vertical distance parameter is allowed, either top or bottom, and either left or right. See example body.
   * @throws {BitmovinError}
   * @memberof EnhancedWatermarkApi
   */
  public create(enhancedWatermarkFilter?: EnhancedWatermarkFilter): Promise<EnhancedWatermarkFilter> {
    return this.restClient.post<EnhancedWatermarkFilter>('/encoding/filters/enhanced-watermark', {}, enhancedWatermarkFilter).then((response) => {
      return map(response, EnhancedWatermarkFilter);
    });
  }

  /**
   * @summary Delete Enhanced Watermark Filter
   * @param {string} filterId Id of the enhanced Watermark Filter.
   * @throws {BitmovinError}
   * @memberof EnhancedWatermarkApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/enhanced-watermark/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Enhanced Watermark Filter Details
   * @param {string} filterId Id of the enhanced Watermark Filter.
   * @throws {BitmovinError}
   * @memberof EnhancedWatermarkApi
   */
  public get(filterId: string): Promise<EnhancedWatermarkFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<EnhancedWatermarkFilter>('/encoding/filters/enhanced-watermark/{filter_id}', pathParamMap).then((response) => {
      return map(response, EnhancedWatermarkFilter);
    });
  }

  /**
   * @summary List Enhanced Watermark Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof EnhancedWatermarkApi
   */
  public list(queryParameters?: EnhancedWatermarkFilterListQueryParams | ((q: EnhancedWatermarkFilterListQueryParamsBuilder) => EnhancedWatermarkFilterListQueryParamsBuilder)): Promise<PaginationResponse<EnhancedWatermarkFilter>> {
    let queryParams: EnhancedWatermarkFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EnhancedWatermarkFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EnhancedWatermarkFilter>>('/encoding/filters/enhanced-watermark', {}, queryParams).then((response) => {
      return new PaginationResponse<EnhancedWatermarkFilter>(response, EnhancedWatermarkFilter);
    });
  }
}
