import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StreamsSearchResponse from '../../models/StreamsSearchResponse';
import PaginationResponse from '../../models/PaginationResponse';
import {StreamsSearchResponseListQueryParams, StreamsSearchResponseListQueryParamsBuilder} from './StreamsSearchResponseListQueryParams';

/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export default class SearchApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get paginated search results of VOD and Live streams
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SearchApi
   */
  public list(queryParameters?: StreamsSearchResponseListQueryParams | ((q: StreamsSearchResponseListQueryParamsBuilder) => StreamsSearchResponseListQueryParamsBuilder)): Promise<PaginationResponse<StreamsSearchResponse>> {
    let queryParams: StreamsSearchResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamsSearchResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamsSearchResponse>>('/streams/search', {}, queryParams).then((response) => {
      return new PaginationResponse<StreamsSearchResponse>(response, StreamsSearchResponse);
    });
  }
}
