import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import CropFilter from '../../../models/CropFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {CropFilterListQueryParams, CropFilterListQueryParamsBuilder} from './CropFilterListQueryParams';

/**
 * CropApi - object-oriented interface
 * @export
 * @class CropApi
 * @extends {BaseAPI}
 */
export default class CropApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Crop Filter
   * @param {CropFilter} cropFilter The Crop Filter to be created
   * @throws {BitmovinError}
   * @memberof CropApi
   */
  public create(cropFilter?: CropFilter): Promise<CropFilter> {
    return this.restClient.post<CropFilter>('/encoding/filters/crop', {}, cropFilter).then((response) => {
      return map(response, CropFilter);
    });
  }

  /**
   * @summary Delete Crop Filter
   * @param {string} filterId Id of the Crop Filter.
   * @throws {BitmovinError}
   * @memberof CropApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/crop/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Crop Filter Details
   * @param {string} filterId Id of the Crop Filter.
   * @throws {BitmovinError}
   * @memberof CropApi
   */
  public get(filterId: string): Promise<CropFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<CropFilter>('/encoding/filters/crop/{filter_id}', pathParamMap).then((response) => {
      return map(response, CropFilter);
    });
  }

  /**
   * @summary List Crop Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof CropApi
   */
  public list(queryParameters?: CropFilterListQueryParams | ((q: CropFilterListQueryParamsBuilder) => CropFilterListQueryParamsBuilder)): Promise<PaginationResponse<CropFilter>> {
    let queryParams: CropFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CropFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CropFilter>>('/encoding/filters/crop', {}, queryParams).then((response) => {
      return new PaginationResponse<CropFilter>(response, CropFilter);
    });
  }
}
