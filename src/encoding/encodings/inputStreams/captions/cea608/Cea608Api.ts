import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import Cea608CaptionInputStream from '../../../../../models/Cea608CaptionInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import Cea608CaptionInputStreamListQueryParams from './Cea608CaptionInputStreamListQueryParams';

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
   * @param {Cea608CaptionInputStream} cea608CaptionInputStream
   * @throws {RequiredError}
   * @memberof Cea608Api
   */
  public create(encodingId: string, cea608CaptionInputStream?: Cea608CaptionInputStream): Promise<Cea608CaptionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Cea608CaptionInputStream>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608', pathParamMap, cea608CaptionInputStream).then((response) => {
      return new Cea608CaptionInputStream(response);
    });
  }

  /**
   * @summary Delete CEA 608 Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the CEA 608 input stream.
   * @throws {RequiredError}
   * @memberof Cea608Api
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608/{input_stream_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary CEA 608 Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the CEA 608 input stream.
   * @throws {RequiredError}
   * @memberof Cea608Api
   */
  public get(encodingId: string, inputStreamId: string): Promise<Cea608CaptionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<Cea608CaptionInputStream>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608/{input_stream_id}', pathParamMap).then((response) => {
      return new Cea608CaptionInputStream(response);
    });
  }

  /**
   * @summary List CEA 608 Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Cea608Api
   */
  public list(encodingId: string, queryParams?: Cea608CaptionInputStreamListQueryParams): Promise<PaginationResponse<Cea608CaptionInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<Cea608CaptionInputStream>>('/encoding/encodings/{encoding_id}/input-streams/captions/cea608', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Cea608CaptionInputStream>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Cea608CaptionInputStream(i));
      }
      return paginationResponse;
    });
  }
}
