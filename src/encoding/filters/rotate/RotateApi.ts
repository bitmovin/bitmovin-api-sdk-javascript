import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import RotateFilter from '../../../models/RotateFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {RotateFilterListQueryParams, RotateFilterListQueryParamsBuilder} from './RotateFilterListQueryParams';

/**
 * RotateApi - object-oriented interface
 * @export
 * @class RotateApi
 * @extends {BaseAPI}
 */
export default class RotateApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Rotate Filter
   * @param {RotateFilter} rotateFilter The Rotate Filter to be created
   * @throws {BitmovinError}
   * @memberof RotateApi
   */
  public create(rotateFilter?: RotateFilter): Promise<RotateFilter> {
    return this.restClient.post<RotateFilter>('/encoding/filters/rotate', {}, rotateFilter).then((response) => {
      return map(response, RotateFilter);
    });
  }

  /**
   * @summary Delete Rotate Filter
   * @param {string} filterId Id of the Rotate Filter.
   * @throws {BitmovinError}
   * @memberof RotateApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/rotate/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Rotate Filter Details
   * @param {string} filterId Id of the Rotate Filter.
   * @throws {BitmovinError}
   * @memberof RotateApi
   */
  public get(filterId: string): Promise<RotateFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<RotateFilter>('/encoding/filters/rotate/{filter_id}', pathParamMap).then((response) => {
      return map(response, RotateFilter);
    });
  }

  /**
   * @summary List Rotate Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RotateApi
   */
  public list(queryParameters?: RotateFilterListQueryParams | ((q: RotateFilterListQueryParamsBuilder) => RotateFilterListQueryParamsBuilder)): Promise<PaginationResponse<RotateFilter>> {
    let queryParams: RotateFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new RotateFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<RotateFilter>>('/encoding/filters/rotate', {}, queryParams).then((response) => {
      return new PaginationResponse<RotateFilter>(response, RotateFilter);
    });
  }
}
