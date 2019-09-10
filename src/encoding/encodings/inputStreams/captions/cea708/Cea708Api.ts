import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import Cea708CaptionInputStream from '../../../../../models/Cea708CaptionInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {Cea708CaptionInputStreamListQueryParams, Cea708CaptionInputStreamListQueryParamsBuilder} from './Cea708CaptionInputStreamListQueryParams';

/**
 * Cea708Api - object-oriented interface
 * @export
 * @class Cea708Api
 * @extends {BaseAPI}
 */
export default class Cea708Api extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add CEA 708 Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {Cea708CaptionInputStream} cea708CaptionInputStream The CEA 708 Input Stream to be created
   * @throws {BitmovinError}
   * @memberof Cea708Api
   */
  public create(encodingId: string, cea708CaptionInputStream?: Cea708CaptionInputStream): Promise<Cea708CaptionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Cea708CaptionInputStream>('/encoding/encodings/{encoding_id}/input-streams/captions/cea708', pathParamMap, cea708CaptionInputStream).then((response) => {
      return map(response, Cea708CaptionInputStream);
    });
  }

  /**
   * @summary Delete CEA 708 Input Stream
   * @param {string} encodingId Id of the Encoding
   * @param {string} inputStreamId Id of the CEA 708 input stream.
   * @throws {BitmovinError}
   * @memberof Cea708Api
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/captions/cea708/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary CEA 708 Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the CEA 708 input stream.
   * @throws {BitmovinError}
   * @memberof Cea708Api
   */
  public get(encodingId: string, inputStreamId: string): Promise<Cea708CaptionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<Cea708CaptionInputStream>('/encoding/encodings/{encoding_id}/input-streams/captions/cea708/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, Cea708CaptionInputStream);
    });
  }

  /**
   * @summary List CEA 708 Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Cea708Api
   */
  public list(encodingId: string, queryParameters?: Cea708CaptionInputStreamListQueryParams | ((q: Cea708CaptionInputStreamListQueryParamsBuilder) => Cea708CaptionInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<Cea708CaptionInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: Cea708CaptionInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Cea708CaptionInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Cea708CaptionInputStream>>('/encoding/encodings/{encoding_id}/input-streams/captions/cea708', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Cea708CaptionInputStream>(response, Cea708CaptionInputStream);
    });
  }
}
