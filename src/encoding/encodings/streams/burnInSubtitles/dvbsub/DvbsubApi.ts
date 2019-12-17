import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import BurnInSubtitleDvbSub from '../../../../../models/BurnInSubtitleDvbSub';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {BurnInSubtitleDvbSubListQueryParams, BurnInSubtitleDvbSubListQueryParamsBuilder} from './BurnInSubtitleDvbSubListQueryParams';

/**
 * DvbsubApi - object-oriented interface
 * @export
 * @class DvbsubApi
 * @extends {BaseAPI}
 */
export default class DvbsubApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Burn-In DVB-SUB Subtitle into Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {BurnInSubtitleDvbSub} burnInSubtitleDvbSub The Burn-In DVB-SUB Subtitle to be added
   * @throws {BitmovinError}
   * @memberof DvbsubApi
   */
  public create(encodingId: string, streamId: string, burnInSubtitleDvbSub?: BurnInSubtitleDvbSub): Promise<BurnInSubtitleDvbSub> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<BurnInSubtitleDvbSub>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub', pathParamMap, burnInSubtitleDvbSub).then((response) => {
      return map(response, BurnInSubtitleDvbSub);
    });
  }

  /**
   * @summary Delete Burn-In DVB-SUB Subtitle from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the subtitle.
   * @throws {BitmovinError}
   * @memberof DvbsubApi
   */
  public delete(encodingId: string, streamId: string, subtitleId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub/{subtitle_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Burn-In DVB-SUB Subtitle Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} subtitleId Id of the subtitle.
   * @throws {BitmovinError}
   * @memberof DvbsubApi
   */
  public get(encodingId: string, streamId: string, subtitleId: string): Promise<BurnInSubtitleDvbSub> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      subtitle_id: subtitleId
    };
    return this.restClient.get<BurnInSubtitleDvbSub>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub/{subtitle_id}', pathParamMap).then((response) => {
      return map(response, BurnInSubtitleDvbSub);
    });
  }

  /**
   * @summary List the Burn-In DVB-SUB subtitles of a stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DvbsubApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: BurnInSubtitleDvbSubListQueryParams | ((q: BurnInSubtitleDvbSubListQueryParamsBuilder) => BurnInSubtitleDvbSubListQueryParamsBuilder)): Promise<PaginationResponse<BurnInSubtitleDvbSub>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: BurnInSubtitleDvbSubListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new BurnInSubtitleDvbSubListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<BurnInSubtitleDvbSub>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/burn-in-subtitles/dvbsub', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<BurnInSubtitleDvbSub>(response, BurnInSubtitleDvbSub);
    });
  }
}
