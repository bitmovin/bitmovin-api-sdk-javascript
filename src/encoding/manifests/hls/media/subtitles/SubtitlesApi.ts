import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import SubtitlesMediaInfo from '../../../../../models/SubtitlesMediaInfo';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {SubtitlesMediaInfoListQueryParams, SubtitlesMediaInfoListQueryParamsBuilder} from './SubtitlesMediaInfoListQueryParams';

/**
 * SubtitlesApi - object-oriented interface
 * @export
 * @class SubtitlesApi
 * @extends {BaseAPI}
 */
export default class SubtitlesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Subtitles Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {SubtitlesMediaInfo} subtitlesMediaInfo The Subtitles Media to be added
   * @throws {BitmovinError}
   * @memberof SubtitlesApi
   */
  public create(manifestId: string, subtitlesMediaInfo?: SubtitlesMediaInfo): Promise<SubtitlesMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<SubtitlesMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/subtitles', pathParamMap, subtitlesMediaInfo).then((response) => {
      return map(response, SubtitlesMediaInfo);
    });
  }

  /**
   * @summary Delete Subtitles Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the subtitles media.
   * @throws {BitmovinError}
   * @memberof SubtitlesApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/subtitles/{media_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Subtitles Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the subtitles media.
   * @throws {BitmovinError}
   * @memberof SubtitlesApi
   */
  public get(manifestId: string, mediaId: string): Promise<SubtitlesMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<SubtitlesMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/subtitles/{media_id}', pathParamMap).then((response) => {
      return map(response, SubtitlesMediaInfo);
    });
  }

  /**
   * @summary List all Subtitles Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SubtitlesApi
   */
  public list(manifestId: string, queryParameters?: SubtitlesMediaInfoListQueryParams | ((q: SubtitlesMediaInfoListQueryParamsBuilder) => SubtitlesMediaInfoListQueryParamsBuilder)): Promise<PaginationResponse<SubtitlesMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: SubtitlesMediaInfoListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SubtitlesMediaInfoListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SubtitlesMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/subtitles', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SubtitlesMediaInfo>(response, SubtitlesMediaInfo);
    });
  }
}
