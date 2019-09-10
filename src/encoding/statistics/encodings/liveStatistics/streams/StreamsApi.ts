import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import StreamInfos from '../../../../../models/StreamInfos';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {StreamInfosListQueryParams, StreamInfosListQueryParamsBuilder} from './StreamInfosListQueryParams';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Stream Infos of Live Statistics from an Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public list(encodingId: string, queryParameters?: StreamInfosListQueryParams | ((q: StreamInfosListQueryParamsBuilder) => StreamInfosListQueryParamsBuilder)): Promise<PaginationResponse<StreamInfos>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: StreamInfosListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamInfosListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamInfos>>('/encoding/statistics/encodings/{encoding_id}/live-statistics/streams', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<StreamInfos>(response, StreamInfos);
    });
  }
}
