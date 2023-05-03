import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StopApi from './stop/StopApi';
import StartApi from './start/StartApi';
import StreamsLiveCreateRequest from '../../models/StreamsLiveCreateRequest';
import StreamsLiveResponse from '../../models/StreamsLiveResponse';
import StreamsLiveUpdateRequest from '../../models/StreamsLiveUpdateRequest';
import PaginationResponse from '../../models/PaginationResponse';
import {StreamsLiveResponseListQueryParams, StreamsLiveResponseListQueryParamsBuilder} from './StreamsLiveResponseListQueryParams';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {
  public stop: StopApi;
  public start: StartApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.stop = new StopApi(configuration);
    this.start = new StartApi(configuration);
  }

  /**
   * @summary Create new live stream
   * @param {StreamsLiveCreateRequest} streamsLiveCreateRequest Create a new stream.
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public create(streamsLiveCreateRequest?: StreamsLiveCreateRequest): Promise<StreamsLiveResponse> {
    return this.restClient.post<StreamsLiveResponse>('/streams/live', {}, streamsLiveCreateRequest).then((response) => {
      return map(response, StreamsLiveResponse);
    });
  }

  /**
   * @summary Get live stream by id
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public get(streamId: string): Promise<StreamsLiveResponse> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.get<StreamsLiveResponse>('/streams/live/{stream_id}', pathParamMap).then((response) => {
      return map(response, StreamsLiveResponse);
    });
  }

  /**
   * @summary Get paginated list of live streams
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public list(queryParameters?: StreamsLiveResponseListQueryParams | ((q: StreamsLiveResponseListQueryParamsBuilder) => StreamsLiveResponseListQueryParamsBuilder)): Promise<PaginationResponse<StreamsLiveResponse>> {
    let queryParams: StreamsLiveResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamsLiveResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamsLiveResponse>>('/streams/live', {}, queryParams).then((response) => {
      return new PaginationResponse<StreamsLiveResponse>(response, StreamsLiveResponse);
    });
  }

  /**
   * @summary Partially update live stream by id
   * @param {string} streamId Id of the stream.
   * @param {StreamsLiveUpdateRequest} streamsLiveUpdateRequest Stream fields to update.
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public patchStreamsLive(streamId: string, streamsLiveUpdateRequest?: StreamsLiveUpdateRequest): Promise<StreamsLiveUpdateRequest> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.patch<StreamsLiveUpdateRequest>('/streams/live/{stream_id}', pathParamMap, streamsLiveUpdateRequest).then((response) => {
      return map(response, StreamsLiveUpdateRequest);
    });
  }

  /**
   * @summary Update live stream by id
   * @param {string} streamId Id of the stream.
   * @param {StreamsLiveUpdateRequest} streamsLiveUpdateRequest The updated stream config object.
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public update(streamId: string, streamsLiveUpdateRequest?: StreamsLiveUpdateRequest): Promise<StreamsLiveUpdateRequest> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.put<StreamsLiveUpdateRequest>('/streams/live/{stream_id}', pathParamMap, streamsLiveUpdateRequest).then((response) => {
      return map(response, StreamsLiveUpdateRequest);
    });
  }
}
