import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import LiveEncodingStatsEvent from '../../../../../models/LiveEncodingStatsEvent';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {LiveEncodingStatsEventListQueryParams, LiveEncodingStatsEventListQueryParamsBuilder} from './LiveEncodingStatsEventListQueryParams';
import {getType, map} from '../../../../../common/Mapper';

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export default class EventsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Events of Live Statistics from an Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof EventsApi
   */
  public list(encodingId: string, queryParameters?: LiveEncodingStatsEventListQueryParams | ((q: LiveEncodingStatsEventListQueryParamsBuilder) => LiveEncodingStatsEventListQueryParamsBuilder)): Promise<PaginationResponse<LiveEncodingStatsEvent>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: LiveEncodingStatsEventListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LiveEncodingStatsEventListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LiveEncodingStatsEvent>>('/encoding/statistics/encodings/{encoding_id}/live-statistics/events', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<LiveEncodingStatsEvent>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new LiveEncodingStatsEvent(i));
      }
      return paginationResponse;
    });
  }
}
