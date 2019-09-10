import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import BurnInSubtitleSrt from '../../../../../models/BurnInSubtitleSrt';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {BurnInSubtitleSrtListQueryParams, BurnInSubtitleSrtListQueryParamsBuilder} from './BurnInSubtitleSrtListQueryParams';

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
   * @param {BurnInSubtitleSrt} burnInSubtitleSrt The Burn-In SRT Subtitle to be added
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public create(encodingId: string, streamId: string, burnInSubtitleSrt?: BurnInSubtitleSrt): Promise<BurnInSubtitleSrt> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<BurnInSubtitleSrt>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt', pathParamMap, burnInSubtitleSrt).then((response) => {
      return map(response, BurnInSubtitleSrt);
    });
  }

  /**
   * @summary Delete Burn-In SRT Subtitle from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the burn-in subtitle.
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public delete(encodingId: string, streamId: string, subtitleId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt/{subtitle_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Burn-In SRT Subtitle Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the burn-in subtitle.
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public get(encodingId: string, streamId: string, subtitleId: string): Promise<BurnInSubtitleSrt> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.get<BurnInSubtitleSrt>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt/{subtitle_id}', pathParamMap).then((response) => {
      return map(response, BurnInSubtitleSrt);
    });
  }

  /**
   * @summary List the Burn-In SRT subtitles of a stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: BurnInSubtitleSrtListQueryParams | ((q: BurnInSubtitleSrtListQueryParamsBuilder) => BurnInSubtitleSrtListQueryParamsBuilder)): Promise<PaginationResponse<BurnInSubtitleSrt>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: BurnInSubtitleSrtListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new BurnInSubtitleSrtListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<BurnInSubtitleSrt>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/srt', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<BurnInSubtitleSrt>(response, BurnInSubtitleSrt);
    });
  }
}
