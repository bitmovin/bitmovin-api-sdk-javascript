import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import SrtToCea608708Caption from '../../../../../../models/SrtToCea608708Caption';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {SrtToCea608708CaptionListQueryParams, SrtToCea608708CaptionListQueryParamsBuilder} from './SrtToCea608708CaptionListQueryParams';

/**
 * SrtApi - object-oriented interface
 * @export
 * @class SrtApi
 * @extends {BaseAPI}
 */
export default class SrtApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Embed SRT captions as 608/708 into Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {SrtToCea608708Caption} srtToCea608708Caption The SRT captions to be embedded as 607/708 into Stream
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public create(encodingId: string, streamId: string, srtToCea608708Caption?: SrtToCea608708Caption): Promise<SrtToCea608708Caption> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<SrtToCea608708Caption>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/srt', pathParamMap, srtToCea608708Caption).then((response) => {
      return map(response, SrtToCea608708Caption);
    });
  }

  /**
   * @summary Delete SRT captions as 608/708 from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} captionsId Id of the caption.
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public delete(encodingId: string, streamId: string, captionsId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      captions_id: captionsId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/srt/{captions_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Embed SRT captions as 608/708 Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} captionsId Id of the caption.
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public get(encodingId: string, streamId: string, captionsId: string): Promise<SrtToCea608708Caption> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      captions_id: captionsId
    };
    return this.restClient.get<SrtToCea608708Caption>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/srt/{captions_id}', pathParamMap).then((response) => {
      return map(response, SrtToCea608708Caption);
    });
  }

  /**
   * @summary List SRT captions as 608/708 from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: SrtToCea608708CaptionListQueryParams | ((q: SrtToCea608708CaptionListQueryParamsBuilder) => SrtToCea608708CaptionListQueryParamsBuilder)): Promise<PaginationResponse<SrtToCea608708Caption>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: SrtToCea608708CaptionListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SrtToCea608708CaptionListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SrtToCea608708Caption>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/srt', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SrtToCea608708Caption>(response, SrtToCea608708Caption);
    });
  }
}
