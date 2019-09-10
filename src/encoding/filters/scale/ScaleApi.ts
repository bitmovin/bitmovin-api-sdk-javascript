import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import ScaleFilter from '../../../models/ScaleFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {ScaleFilterListQueryParams, ScaleFilterListQueryParamsBuilder} from './ScaleFilterListQueryParams';

/**
 * ScaleApi - object-oriented interface
 * @export
 * @class ScaleApi
 * @extends {BaseAPI}
 */
export default class ScaleApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Scale Filter
   * @param {ScaleFilter} scaleFilter The Scale Filter to be created
   * @throws {BitmovinError}
   * @memberof ScaleApi
   */
  public create(scaleFilter?: ScaleFilter): Promise<ScaleFilter> {
    return this.restClient.post<ScaleFilter>('/encoding/filters/scale', {}, scaleFilter).then((response) => {
      return map(response, ScaleFilter);
    });
  }

  /**
   * @summary Delete Scale Filter
   * @param {string} filterId Id of the scale filter
   * @throws {BitmovinError}
   * @memberof ScaleApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/scale/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Scale Filter Details
   * @param {string} filterId Id of the scale filter
   * @throws {BitmovinError}
   * @memberof ScaleApi
   */
  public get(filterId: string): Promise<ScaleFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<ScaleFilter>('/encoding/filters/scale/{filter_id}', pathParamMap).then((response) => {
      return map(response, ScaleFilter);
    });
  }

  /**
   * @summary List Scale Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ScaleApi
   */
  public list(queryParameters?: ScaleFilterListQueryParams | ((q: ScaleFilterListQueryParamsBuilder) => ScaleFilterListQueryParamsBuilder)): Promise<PaginationResponse<ScaleFilter>> {
    let queryParams: ScaleFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ScaleFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ScaleFilter>>('/encoding/filters/scale', {}, queryParams).then((response) => {
      return new PaginationResponse<ScaleFilter>(response, ScaleFilter);
    });
  }
}
