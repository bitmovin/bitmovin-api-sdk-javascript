import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import DvbSubtitleInputStream from '../../../../../models/DvbSubtitleInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {DvbSubtitleInputStreamListQueryParams, DvbSubtitleInputStreamListQueryParamsBuilder} from './DvbSubtitleInputStreamListQueryParams';

/**
 * DvbSubtitleApi - object-oriented interface
 * @export
 * @class DvbSubtitleApi
 * @extends {BaseAPI}
 */
export default class DvbSubtitleApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add DVB Subtitle Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {DvbSubtitleInputStream} dvbSubtitleInputStream The DVB Subtitle Input Stream to be created
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public create(encodingId: string, dvbSubtitleInputStream?: DvbSubtitleInputStream): Promise<DvbSubtitleInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<DvbSubtitleInputStream>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-subtitle', pathParamMap, dvbSubtitleInputStream).then((response) => {
      return map(response, DvbSubtitleInputStream);
    });
  }

  /**
   * @summary Delete DVB Subtitle Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the DVB Subtitle Input Stream.
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-subtitle/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DVB Subtitle Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the DVB Subtitle Input Stream.
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<DvbSubtitleInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<DvbSubtitleInputStream>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-subtitle/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, DvbSubtitleInputStream);
    });
  }

  /**
   * @summary List DVB Subtitle Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public list(encodingId: string, queryParameters?: DvbSubtitleInputStreamListQueryParams | ((q: DvbSubtitleInputStreamListQueryParamsBuilder) => DvbSubtitleInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<DvbSubtitleInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: DvbSubtitleInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DvbSubtitleInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DvbSubtitleInputStream>>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-subtitle', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DvbSubtitleInputStream>(response, DvbSubtitleInputStream);
    });
  }
}
