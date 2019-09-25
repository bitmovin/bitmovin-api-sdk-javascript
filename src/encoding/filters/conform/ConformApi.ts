import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import ConformFilter from '../../../models/ConformFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {ConformFilterListQueryParams, ConformFilterListQueryParamsBuilder} from './ConformFilterListQueryParams';

/**
 * ConformApi - object-oriented interface
 * @export
 * @class ConformApi
 * @extends {BaseAPI}
 */
export default class ConformApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Conform Filter. Keeps all the frames of the input. The playback time of the output will be slower or faster.
   * @param {ConformFilter} conformFilter The Conform Filter to be created
   * @throws {BitmovinError}
   * @memberof ConformApi
   */
  public create(conformFilter?: ConformFilter): Promise<ConformFilter> {
    return this.restClient.post<ConformFilter>('/encoding/filters/conform', {}, conformFilter).then((response) => {
      return map(response, ConformFilter);
    });
  }

  /**
   * @summary Delete Conform Filter
   * @param {string} filterId Id of the conform filter
   * @throws {BitmovinError}
   * @memberof ConformApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/conform/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Conform Filter Details
   * @param {string} filterId Id of the conform filter
   * @throws {BitmovinError}
   * @memberof ConformApi
   */
  public get(filterId: string): Promise<ConformFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<ConformFilter>('/encoding/filters/conform/{filter_id}', pathParamMap).then((response) => {
      return map(response, ConformFilter);
    });
  }

  /**
   * @summary List Conform Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ConformApi
   */
  public list(queryParameters?: ConformFilterListQueryParams | ((q: ConformFilterListQueryParamsBuilder) => ConformFilterListQueryParamsBuilder)): Promise<PaginationResponse<ConformFilter>> {
    let queryParams: ConformFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ConformFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ConformFilter>>('/encoding/filters/conform', {}, queryParams).then((response) => {
      return new PaginationResponse<ConformFilter>(response, ConformFilter);
    });
  }
}
