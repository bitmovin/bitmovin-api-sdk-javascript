import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StreamsVideoCreateRequest from '../../models/StreamsVideoCreateRequest';
import StreamsVideoResponse from '../../models/StreamsVideoResponse';
import StreamsVideoUpdateRequest from '../../models/StreamsVideoUpdateRequest';
import PaginationResponse from '../../models/PaginationResponse';
import {StreamsVideoResponseListQueryParams, StreamsVideoResponseListQueryParamsBuilder} from './StreamsVideoResponseListQueryParams';

/**
 * VideoApi - object-oriented interface
 * @export
 * @class VideoApi
 * @extends {BaseAPI}
 */
export default class VideoApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create new Stream
   * @param {StreamsVideoCreateRequest} streamsVideoCreateRequest Create a new stream.
   * @throws {BitmovinError}
   * @memberof VideoApi
   */
  public create(streamsVideoCreateRequest?: StreamsVideoCreateRequest): Promise<StreamsVideoResponse> {
    return this.restClient.post<StreamsVideoResponse>('/streams/video', {}, streamsVideoCreateRequest).then((response) => {
      return map(response, StreamsVideoResponse);
    });
  }

  /**
   * @summary Get stream by id
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof VideoApi
   */
  public get(streamId: string): Promise<StreamsVideoResponse> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.get<StreamsVideoResponse>('/streams/video/{stream_id}', pathParamMap).then((response) => {
      return map(response, StreamsVideoResponse);
    });
  }

  /**
   * @summary Get paginated list of streams
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof VideoApi
   */
  public list(queryParameters?: StreamsVideoResponseListQueryParams | ((q: StreamsVideoResponseListQueryParamsBuilder) => StreamsVideoResponseListQueryParamsBuilder)): Promise<PaginationResponse<StreamsVideoResponse>> {
    let queryParams: StreamsVideoResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamsVideoResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamsVideoResponse>>('/streams/video', {}, queryParams).then((response) => {
      return new PaginationResponse<StreamsVideoResponse>(response, StreamsVideoResponse);
    });
  }

  /**
   * @summary Update stream by id
   * @param {string} streamId Id of the stream.
   * @param {StreamsVideoUpdateRequest} streamsVideoUpdateRequest Stream fields to update.
   * @throws {BitmovinError}
   * @memberof VideoApi
   */
  public patchStreamsVideo(streamId: string, streamsVideoUpdateRequest?: StreamsVideoUpdateRequest): Promise<StreamsVideoResponse> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.patch<StreamsVideoResponse>('/streams/video/{stream_id}', pathParamMap, streamsVideoUpdateRequest).then((response) => {
      return map(response, StreamsVideoResponse);
    });
  }
}
