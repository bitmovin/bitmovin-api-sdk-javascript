import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import WatermarkFilter from '../../../models/WatermarkFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {WatermarkFilterListQueryParams, WatermarkFilterListQueryParamsBuilder} from './WatermarkFilterListQueryParams';

/**
 * WatermarkApi - object-oriented interface
 * @export
 * @class WatermarkApi
 * @extends {BaseAPI}
 */
export default class WatermarkApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Watermark Filter
   * @param {WatermarkFilter} watermarkFilter The Watermark Filter to be created. Only one horizontal and one vertical distance parameter is allowed, either top or bottom, and either left or right. See example body.
   * @throws {BitmovinError}
   * @memberof WatermarkApi
   */
  public create(watermarkFilter?: WatermarkFilter): Promise<WatermarkFilter> {
    return this.restClient.post<WatermarkFilter>('/encoding/filters/watermark', {}, watermarkFilter).then((response) => {
      return map(response, WatermarkFilter);
    });
  }

  /**
   * @summary Delete Watermark Filter
   * @param {string} filterId Id of the watermark configuration.
   * @throws {BitmovinError}
   * @memberof WatermarkApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/watermark/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Watermark Filter Details
   * @param {string} filterId Id of the watermark configuration.
   * @throws {BitmovinError}
   * @memberof WatermarkApi
   */
  public get(filterId: string): Promise<WatermarkFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<WatermarkFilter>('/encoding/filters/watermark/{filter_id}', pathParamMap).then((response) => {
      return map(response, WatermarkFilter);
    });
  }

  /**
   * @summary List Watermark Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof WatermarkApi
   */
  public list(queryParameters?: WatermarkFilterListQueryParams | ((q: WatermarkFilterListQueryParamsBuilder) => WatermarkFilterListQueryParamsBuilder)): Promise<PaginationResponse<WatermarkFilter>> {
    let queryParams: WatermarkFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WatermarkFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<WatermarkFilter>>('/encoding/filters/watermark', {}, queryParams).then((response) => {
      return new PaginationResponse<WatermarkFilter>(response, WatermarkFilter);
    });
  }
}
