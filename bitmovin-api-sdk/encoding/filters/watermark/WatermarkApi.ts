import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import WatermarkFilter from '../../../models/WatermarkFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import WatermarkFilterListQueryParams from './WatermarkFilterListQueryParams';

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
   * @param {WatermarkFilter} [watermarkFilter] Only one horizontal and one vertical distance parameter is allowed, either top or bottom, and either left or right. See example body.
   * @throws {RequiredError}
   * @memberof WatermarkApi
   */
  public create(watermarkFilter?: WatermarkFilter): Promise<WatermarkFilter> {
    return this.restClient.post<WatermarkFilter>('/encoding/filters/watermark', {}, watermarkFilter).then((response) => {
      return new WatermarkFilter(response);
    });
  }

  /**
   * @summary Delete Watermark Filter
   * @param {string} filterId Id of the watermark configuration.
   * @throws {RequiredError}
   * @memberof WatermarkApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/watermark/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Watermark Filter Details
   * @param {string} filterId Id of the watermark configuration.
   * @throws {RequiredError}
   * @memberof WatermarkApi
   */
  public get(filterId: string): Promise<WatermarkFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<WatermarkFilter>('/encoding/filters/watermark/{filter_id}', pathParamMap).then((response) => {
      return new WatermarkFilter(response);
    });
  }

  /**
   * @summary List Watermark Filters
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof WatermarkApi
   */
  public list(queryParams?: WatermarkFilterListQueryParams): Promise<PaginationResponse<WatermarkFilter>> {
    return this.restClient.get<PaginationResponse<WatermarkFilter>>('/encoding/filters/watermark', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<WatermarkFilter>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new WatermarkFilter(i));
      }
      return paginationResponse;
    });
  }
}
