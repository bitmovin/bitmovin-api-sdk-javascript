import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import Cea608CaptionInputStream from '../../../../../models/Cea608CaptionInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {Cea608CaptionInputStreamListQueryParams, Cea608CaptionInputStreamListQueryParamsBuilder} from './Cea608CaptionInputStreamListQueryParams';

/**
 * Cea608Api - object-oriented interface
 * @export
 * @class Cea608Api
 * @extends {BaseAPI}
 */
export default class Cea608Api extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add CEA 608 Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {Cea608CaptionInputStream} cea608CaptionInputStream The CEA 608 Input Stream to be created
   * @throws {BitmovinError}
   * @memberof Cea608Api
   */
  public create(encodingId: string, cea608CaptionInputStream?: Cea608CaptionInputStream): Promise<Cea608CaptionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Cea608CaptionInputStream>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608', pathParamMap, cea608CaptionInputStream).then((response) => {
      return map(response, Cea608CaptionInputStream);
    });
  }

  /**
   * @summary Delete CEA 608 Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the CEA 608 input stream.
   * @throws {BitmovinError}
   * @memberof Cea608Api
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary CEA 608 Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the CEA 608 input stream.
   * @throws {BitmovinError}
   * @memberof Cea608Api
   */
  public get(encodingId: string, inputStreamId: string): Promise<Cea608CaptionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<Cea608CaptionInputStream>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, Cea608CaptionInputStream);
    });
  }

  /**
   * @summary List CEA 608 Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Cea608Api
   */
  public list(encodingId: string, queryParameters?: Cea608CaptionInputStreamListQueryParams | ((q: Cea608CaptionInputStreamListQueryParamsBuilder) => Cea608CaptionInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<Cea608CaptionInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: Cea608CaptionInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Cea608CaptionInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Cea608CaptionInputStream>>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Cea608CaptionInputStream>(response, Cea608CaptionInputStream);
    });
  }
}
