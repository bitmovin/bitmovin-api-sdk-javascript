import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import DvbTeletextInputStream from '../../../../../models/DvbTeletextInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {DvbTeletextInputStreamListQueryParams, DvbTeletextInputStreamListQueryParamsBuilder} from './DvbTeletextInputStreamListQueryParams';

/**
 * DvbTeletextApi - object-oriented interface
 * @export
 * @class DvbTeletextApi
 * @extends {BaseAPI}
 */
export default class DvbTeletextApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add DVB-Teletext Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {DvbTeletextInputStream} dvbTeletextInputStream The DVB-Teletext Input Stream to be created
   * @throws {BitmovinError}
   * @memberof DvbTeletextApi
   */
  public create(encodingId: string, dvbTeletextInputStream?: DvbTeletextInputStream): Promise<DvbTeletextInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<DvbTeletextInputStream>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-teletext', pathParamMap, dvbTeletextInputStream).then((response) => {
      return map(response, DvbTeletextInputStream);
    });
  }

  /**
   * @summary Delete DVB-Teletext Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the DVB-Teletext input stream.
   * @throws {BitmovinError}
   * @memberof DvbTeletextApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-teletext/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DVB-Teletext Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the DVB-Teletext input stream.
   * @throws {BitmovinError}
   * @memberof DvbTeletextApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<DvbTeletextInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<DvbTeletextInputStream>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-teletext/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, DvbTeletextInputStream);
    });
  }

  /**
   * @summary List DVB-Teletext Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DvbTeletextApi
   */
  public list(encodingId: string, queryParameters?: DvbTeletextInputStreamListQueryParams | ((q: DvbTeletextInputStreamListQueryParamsBuilder) => DvbTeletextInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<DvbTeletextInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: DvbTeletextInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DvbTeletextInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DvbTeletextInputStream>>('/encoding/encodings/{encoding_id}/input-streams/subtitles/dvb-teletext', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DvbTeletextInputStream>(response, DvbTeletextInputStream);
    });
  }
}
