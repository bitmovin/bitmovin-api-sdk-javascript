import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import H264PictureTimingTrimmingInputStream from '../../../../../models/H264PictureTimingTrimmingInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {H264PictureTimingTrimmingInputStreamListQueryParams, H264PictureTimingTrimmingInputStreamListQueryParamsBuilder} from './H264PictureTimingTrimmingInputStreamListQueryParams';
import {getType, map} from '../../../../../common/Mapper';

/**
 * H264PictureTimingApi - object-oriented interface
 * @export
 * @class H264PictureTimingApi
 * @extends {BaseAPI}
 */
export default class H264PictureTimingApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add H264 Picture Timing Trimming Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {H264PictureTimingTrimmingInputStream} h264PictureTimingTrimmingInputStream The H264 Picture Timing Trimming Input Stream to be created
   * @throws {RequiredError}
   * @memberof H264PictureTimingApi
   */
  public create(encodingId: string, h264PictureTimingTrimmingInputStream?: H264PictureTimingTrimmingInputStream): Promise<H264PictureTimingTrimmingInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<H264PictureTimingTrimmingInputStream>('/encoding/encodings/{encoding_id}/input-streams/trimming/h264-picture-timing', pathParamMap, h264PictureTimingTrimmingInputStream).then((response) => {
      return new H264PictureTimingTrimmingInputStream(response);
    });
  }

  /**
   * @summary Delete H264 Picture Timing Trimming Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the H264 Picture Timing Trimming Input Stream.
   * @throws {RequiredError}
   * @memberof H264PictureTimingApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/trimming/h264-picture-timing/{input_stream_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary H264 Picture Timing Trimming Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the H264 Picture Timing Trimming Input Stream.
   * @throws {RequiredError}
   * @memberof H264PictureTimingApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<H264PictureTimingTrimmingInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<H264PictureTimingTrimmingInputStream>('/encoding/encodings/{encoding_id}/input-streams/trimming/h264-picture-timing/{input_stream_id}', pathParamMap).then((response) => {
      return new H264PictureTimingTrimmingInputStream(response);
    });
  }

  /**
   * @summary List H264 Picture Timing Trimming Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof H264PictureTimingApi
   */
  public list(encodingId: string, queryParameters?: H264PictureTimingTrimmingInputStreamListQueryParams | ((q: H264PictureTimingTrimmingInputStreamListQueryParamsBuilder) => H264PictureTimingTrimmingInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<H264PictureTimingTrimmingInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: H264PictureTimingTrimmingInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new H264PictureTimingTrimmingInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<H264PictureTimingTrimmingInputStream>>('/encoding/encodings/{encoding_id}/input-streams/trimming/h264-picture-timing', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<H264PictureTimingTrimmingInputStream>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new H264PictureTimingTrimmingInputStream(i));
      }
      return paginationResponse;
    });
  }
}
