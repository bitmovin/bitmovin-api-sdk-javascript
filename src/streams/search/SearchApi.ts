import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StreamsResponse from '../../models/StreamsResponse';
import StreamsType from '../../models/StreamsType';
import StreamsVideoStatus from '../../models/StreamsVideoStatus';
import PaginationResponse from '../../models/PaginationResponse';
import {StreamsResponseListQueryParams, StreamsResponseListQueryParamsBuilder} from './StreamsResponseListQueryParams';

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
  public list(queryParameters?: StreamsResponseListQueryParams | ((q: StreamsResponseListQueryParamsBuilder) => StreamsResponseListQueryParamsBuilder)): Promise<PaginationResponse<StreamsResponse>> {
    let queryParams: StreamsResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamsResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamsResponse>>('/streams/search', {}, queryParams).then((response) => {
      return new PaginationResponse<StreamsResponse>(response, StreamsResponse);
    });
  }
}
