import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import BurnInSubtitleAssa from '../../../../../models/BurnInSubtitleAssa';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {BurnInSubtitleAssaListQueryParams, BurnInSubtitleAssaListQueryParamsBuilder} from './BurnInSubtitleAssaListQueryParams';

/**
 * AssaApi - object-oriented interface
 * @export
 * @class AssaApi
 * @extends {BaseAPI}
 */
export default class AssaApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Burn-In ASSA Subtitle into Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {BurnInSubtitleAssa} burnInSubtitleAssa The Burn-In ASSA Subtitle to be added
   * @throws {BitmovinError}
   * @memberof AssaApi
   */
  public create(encodingId: string, streamId: string, burnInSubtitleAssa?: BurnInSubtitleAssa): Promise<BurnInSubtitleAssa> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<BurnInSubtitleAssa>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/assa', pathParamMap, burnInSubtitleAssa).then((response) => {
      return map(response, BurnInSubtitleAssa);
    });
  }

  /**
   * @summary Delete Burn-In ASSA Subtitle from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the burn-in subtitle.
   * @throws {BitmovinError}
   * @memberof AssaApi
   */
  public delete(encodingId: string, streamId: string, subtitleId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/assa/{subtitle_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Burn-In ASSA Subtitle Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the burn-in subtitle.
   * @throws {BitmovinError}
   * @memberof AssaApi
   */
  public get(encodingId: string, streamId: string, subtitleId: string): Promise<BurnInSubtitleAssa> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.get<BurnInSubtitleAssa>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/assa/{subtitle_id}', pathParamMap).then((response) => {
      return map(response, BurnInSubtitleAssa);
    });
  }

  /**
   * @summary List the Burn-In ASSA subtitles of a stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AssaApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: BurnInSubtitleAssaListQueryParams | ((q: BurnInSubtitleAssaListQueryParamsBuilder) => BurnInSubtitleAssaListQueryParamsBuilder)): Promise<PaginationResponse<BurnInSubtitleAssa>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: BurnInSubtitleAssaListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new BurnInSubtitleAssaListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<BurnInSubtitleAssa>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/assa', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<BurnInSubtitleAssa>(response, BurnInSubtitleAssa);
    });
  }
}
