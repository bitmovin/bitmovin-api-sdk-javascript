import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import TextMuxing from '../../../../models/TextMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import TextMuxingListQueryParams from './TextMuxingListQueryParams';

/**
 * TextApi - object-oriented interface
 * @export
 * @class TextApi
 * @extends {BaseAPI}
 */
export default class TextApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Text Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {TextMuxing} textMuxing
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public create(encodingId: string, textMuxing?: TextMuxing): Promise<TextMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<TextMuxing>('/encoding/encodings/{encoding_id}/muxings/text', pathParamMap, textMuxing).then((response) => {
      return new TextMuxing(response);
    });
  }

  /**
   * @summary Delete Text Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Text muxing
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/text/{muxing_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Text Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Text muxing
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public get(encodingId: string, muxingId: string): Promise<TextMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<TextMuxing>('/encoding/encodings/{encoding_id}/muxings/text/{muxing_id}', pathParamMap).then((response) => {
      return new TextMuxing(response);
    });
  }

  /**
   * @summary List Text Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public list(encodingId: string, queryParams?: TextMuxingListQueryParams): Promise<PaginationResponse<TextMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<TextMuxing>>('/encoding/encodings/{encoding_id}/muxings/text', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<TextMuxing>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new TextMuxing(i));
      }
      return paginationResponse;
    });
  }
}
