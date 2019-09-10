import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import TimeBasedTrimmingInputStream from '../../../../../models/TimeBasedTrimmingInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {TimeBasedTrimmingInputStreamListQueryParams, TimeBasedTrimmingInputStreamListQueryParamsBuilder} from './TimeBasedTrimmingInputStreamListQueryParams';

/**
 * TimeBasedApi - object-oriented interface
 * @export
 * @class TimeBasedApi
 * @extends {BaseAPI}
 */
export default class TimeBasedApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Time-Based Trimming Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {TimeBasedTrimmingInputStream} timeBasedTrimmingInputStream The Time-Based Trimming Input Stream to be created
   * @throws {BitmovinError}
   * @memberof TimeBasedApi
   */
  public create(encodingId: string, timeBasedTrimmingInputStream?: TimeBasedTrimmingInputStream): Promise<TimeBasedTrimmingInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<TimeBasedTrimmingInputStream>('/encoding/encodings/{encoding_id}/input-streams/trimming/time-based', pathParamMap, timeBasedTrimmingInputStream).then((response) => {
      return map(response, TimeBasedTrimmingInputStream);
    });
  }

  /**
   * @summary Delete Time-Based Trimming Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Time-Based Trimming Input Stream.
   * @throws {BitmovinError}
   * @memberof TimeBasedApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/trimming/time-based/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Time-Based Trimming Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Time-Based Trimming Input Stream.
   * @throws {BitmovinError}
   * @memberof TimeBasedApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<TimeBasedTrimmingInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<TimeBasedTrimmingInputStream>('/encoding/encodings/{encoding_id}/input-streams/trimming/time-based/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, TimeBasedTrimmingInputStream);
    });
  }

  /**
   * @summary List Time-Based Trimming Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof TimeBasedApi
   */
  public list(encodingId: string, queryParameters?: TimeBasedTrimmingInputStreamListQueryParams | ((q: TimeBasedTrimmingInputStreamListQueryParamsBuilder) => TimeBasedTrimmingInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<TimeBasedTrimmingInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: TimeBasedTrimmingInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new TimeBasedTrimmingInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<TimeBasedTrimmingInputStream>>('/encoding/encodings/{encoding_id}/input-streams/trimming/time-based', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<TimeBasedTrimmingInputStream>(response, TimeBasedTrimmingInputStream);
    });
  }
}
