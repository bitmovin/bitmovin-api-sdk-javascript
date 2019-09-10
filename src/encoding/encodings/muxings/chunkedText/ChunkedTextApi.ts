import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ChunkedTextMuxing from '../../../../models/ChunkedTextMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ChunkedTextMuxingListQueryParams, ChunkedTextMuxingListQueryParamsBuilder} from './ChunkedTextMuxingListQueryParams';

/**
 * ChunkedTextApi - object-oriented interface
 * @export
 * @class ChunkedTextApi
 * @extends {BaseAPI}
 */
export default class ChunkedTextApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Chunked Text Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {ChunkedTextMuxing} chunkedTextMuxing The Chunked Text Muxing to be created
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public create(encodingId: string, chunkedTextMuxing?: ChunkedTextMuxing): Promise<ChunkedTextMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ChunkedTextMuxing>('/encoding/encodings/{encoding_id}/muxings/chunked-text', pathParamMap, chunkedTextMuxing).then((response) => {
      return map(response, ChunkedTextMuxing);
    });
  }

  /**
   * @summary Delete Chunked Text Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Chunked Text Muxing
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/chunked-text/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Chunked Text Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Chunked Text Muxing
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public get(encodingId: string, muxingId: string): Promise<ChunkedTextMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<ChunkedTextMuxing>('/encoding/encodings/{encoding_id}/muxings/chunked-text/{muxing_id}', pathParamMap).then((response) => {
      return map(response, ChunkedTextMuxing);
    });
  }

  /**
   * @summary List Chunked Text Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public list(encodingId: string, queryParameters?: ChunkedTextMuxingListQueryParams | ((q: ChunkedTextMuxingListQueryParamsBuilder) => ChunkedTextMuxingListQueryParamsBuilder)): Promise<PaginationResponse<ChunkedTextMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ChunkedTextMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ChunkedTextMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ChunkedTextMuxing>>('/encoding/encodings/{encoding_id}/muxings/chunked-text', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ChunkedTextMuxing>(response, ChunkedTextMuxing);
    });
  }
}
