import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ConcatenationInputStream from '../../../../models/ConcatenationInputStream';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ConcatenationInputStreamListQueryParams, ConcatenationInputStreamListQueryParamsBuilder} from './ConcatenationInputStreamListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * ConcatenationApi - object-oriented interface
 * @export
 * @class ConcatenationApi
 * @extends {BaseAPI}
 */
export default class ConcatenationApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Concatenation Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {ConcatenationInputStream} concatenationInputStream The Concatenation Input Stream to be created
   * @throws {RequiredError}
   * @memberof ConcatenationApi
   */
  public create(encodingId: string, concatenationInputStream?: ConcatenationInputStream): Promise<ConcatenationInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ConcatenationInputStream>('/encoding/encodings/{encoding_id}/input-streams/concatenation', pathParamMap, concatenationInputStream).then((response) => {
      return new ConcatenationInputStream(response);
    });
  }

  /**
   * @summary Delete Concatenation Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Concatenation input stream.
   * @throws {RequiredError}
   * @memberof ConcatenationApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/concatenation/{input_stream_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Concatenation Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the concatenation input stream.
   * @throws {RequiredError}
   * @memberof ConcatenationApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<ConcatenationInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<ConcatenationInputStream>('/encoding/encodings/{encoding_id}/input-streams/concatenation/{input_stream_id}', pathParamMap).then((response) => {
      return new ConcatenationInputStream(response);
    });
  }

  /**
   * @summary List Concatenation Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ConcatenationApi
   */
  public list(encodingId: string, queryParameters?: ConcatenationInputStreamListQueryParams | ((q: ConcatenationInputStreamListQueryParamsBuilder) => ConcatenationInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<ConcatenationInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ConcatenationInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ConcatenationInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ConcatenationInputStream>>('/encoding/encodings/{encoding_id}/input-streams/concatenation', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ConcatenationInputStream>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ConcatenationInputStream(i));
      }
      return paginationResponse;
    });
  }
}
