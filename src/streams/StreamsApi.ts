import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import BitmovinStreamResponse from '../models/BitmovinStreamResponse';
import CreateBitmovinStreamRequest from '../models/CreateBitmovinStreamRequest';
import UpdateBitmovinStreamRequest from '../models/UpdateBitmovinStreamRequest';
import PaginationResponse from '../models/PaginationResponse';
import {BitmovinStreamResponseListQueryParams, BitmovinStreamResponseListQueryParamsBuilder} from './BitmovinStreamResponseListQueryParams';

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
   * @summary Create new Stream
   * @param {CreateBitmovinStreamRequest} createBitmovinStreamRequest Create a new Stream.
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public create(createBitmovinStreamRequest?: CreateBitmovinStreamRequest): Promise<BitmovinStreamResponse> {
    return this.restClient.post<BitmovinStreamResponse>('/streams', {}, createBitmovinStreamRequest).then((response) => {
      return map(response, BitmovinStreamResponse);
    });
  }

  /**
   * @summary Get Stream by id
   * @param {string} streamId Id of the Stream.
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public get(streamId: string): Promise<BitmovinStreamResponse> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.get<BitmovinStreamResponse>('/streams/{stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinStreamResponse);
    });
  }

  /**
   * @summary Get paginated list of Streams
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public list(queryParameters?: BitmovinStreamResponseListQueryParams | ((q: BitmovinStreamResponseListQueryParamsBuilder) => BitmovinStreamResponseListQueryParamsBuilder)): Promise<PaginationResponse<BitmovinStreamResponse>> {
    let queryParams: BitmovinStreamResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new BitmovinStreamResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<BitmovinStreamResponse>>('/streams', {}, queryParams).then((response) => {
      return new PaginationResponse<BitmovinStreamResponse>(response, BitmovinStreamResponse);
    });
  }

  /**
   * @summary Update Stream by id
   * @param {string} streamId Id of the Stream.
   * @param {UpdateBitmovinStreamRequest} updateBitmovinStreamRequest Stream fields to update.
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public patchBitmovinStreamsStreamsByStreamId(streamId: string, updateBitmovinStreamRequest?: UpdateBitmovinStreamRequest): Promise<BitmovinStreamResponse> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.patch<BitmovinStreamResponse>('/streams/{stream_id}', pathParamMap, updateBitmovinStreamRequest).then((response) => {
      return map(response, BitmovinStreamResponse);
    });
  }
}
