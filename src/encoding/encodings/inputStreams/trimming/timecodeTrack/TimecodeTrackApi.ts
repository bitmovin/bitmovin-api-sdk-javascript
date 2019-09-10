import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import TimecodeTrackTrimmingInputStream from '../../../../../models/TimecodeTrackTrimmingInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {TimecodeTrackTrimmingInputStreamListQueryParams, TimecodeTrackTrimmingInputStreamListQueryParamsBuilder} from './TimecodeTrackTrimmingInputStreamListQueryParams';

/**
 * TimecodeTrackApi - object-oriented interface
 * @export
 * @class TimecodeTrackApi
 * @extends {BaseAPI}
 */
export default class TimecodeTrackApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Timecode Track Trimming Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {TimecodeTrackTrimmingInputStream} timecodeTrackTrimmingInputStream The Timecode Track Trimming Input Stream to be created
   * @throws {BitmovinError}
   * @memberof TimecodeTrackApi
   */
  public create(encodingId: string, timecodeTrackTrimmingInputStream?: TimecodeTrackTrimmingInputStream): Promise<TimecodeTrackTrimmingInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<TimecodeTrackTrimmingInputStream>('/encoding/encodings/{encoding_id}/input-streams/trimming/timecode-track', pathParamMap, timecodeTrackTrimmingInputStream).then((response) => {
      return map(response, TimecodeTrackTrimmingInputStream);
    });
  }

  /**
   * @summary Delete Timecode Track Trimming Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Timecode Track Trimming Input Stream.
   * @throws {BitmovinError}
   * @memberof TimecodeTrackApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/trimming/timecode-track/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Timecode Track Trimming Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Timecode Track Trimming Input Stream.
   * @throws {BitmovinError}
   * @memberof TimecodeTrackApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<TimecodeTrackTrimmingInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<TimecodeTrackTrimmingInputStream>('/encoding/encodings/{encoding_id}/input-streams/trimming/timecode-track/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, TimecodeTrackTrimmingInputStream);
    });
  }

  /**
   * @summary List Timecode Track Trimming Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof TimecodeTrackApi
   */
  public list(encodingId: string, queryParameters?: TimecodeTrackTrimmingInputStreamListQueryParams | ((q: TimecodeTrackTrimmingInputStreamListQueryParamsBuilder) => TimecodeTrackTrimmingInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<TimecodeTrackTrimmingInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: TimecodeTrackTrimmingInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new TimecodeTrackTrimmingInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<TimecodeTrackTrimmingInputStream>>('/encoding/encodings/{encoding_id}/input-streams/trimming/timecode-track', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<TimecodeTrackTrimmingInputStream>(response, TimecodeTrackTrimmingInputStream);
    });
  }
}
