import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import BurnInSubtitleSrt from '../../../../../models/BurnInSubtitleSrt';
import PaginationResponse from '../../../../../models/PaginationResponse';
import BurnInSubtitleSrtListQueryParams from './BurnInSubtitleSrtListQueryParams';

/**
 * SrtApi - object-oriented interface
 * @export
 * @class SrtApi
 * @extends {BaseAPI}
 */
export default class SrtApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Burn-In SRT Subtitle into Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {BurnInSubtitleSrt} burnInSubtitleSrt
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public create(encodingId: string, streamId: string, burnInSubtitleSrt?: BurnInSubtitleSrt): Promise<BurnInSubtitleSrt> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<BurnInSubtitleSrt>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt', pathParamMap, burnInSubtitleSrt).then((response) => {
      return new BurnInSubtitleSrt(response);
    });
  }

  /**
   * @summary Delete Burn-In SRT Subtitle from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the burn-in subtitle.
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public delete(encodingId: string, streamId: string, subtitleId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt/{subtitle_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Get Burn-In SRT Subtitle Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the burn-in subtitle.
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public get(encodingId: string, streamId: string, subtitleId: string): Promise<BurnInSubtitleSrt> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.get<BurnInSubtitleSrt>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt/{subtitle_id}', pathParamMap).then((response) => {
      return new BurnInSubtitleSrt(response);
    });
  }

  /**
   * @summary List the Burn-In SRT subtitles of a stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public list(encodingId: string, streamId: string, queryParams?: BurnInSubtitleSrtListQueryParams): Promise<PaginationResponse<BurnInSubtitleSrt>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<PaginationResponse<BurnInSubtitleSrt>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<BurnInSubtitleSrt>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new BurnInSubtitleSrt(i));
      }
      return paginationResponse;
    });
  }
}
