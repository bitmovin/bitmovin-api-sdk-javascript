import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import SubtitlesMediaInfo from '../../../../../models/SubtitlesMediaInfo';
import PaginationResponse from '../../../../../models/PaginationResponse';
import SubtitlesMediaInfoListQueryParams from './SubtitlesMediaInfoListQueryParams';

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
   * @param {SubtitlesMediaInfo} subtitlesMediaInfo
   * @throws {RequiredError}
   * @memberof SubtitlesApi
   */
  public create(manifestId: string, subtitlesMediaInfo?: SubtitlesMediaInfo): Promise<SubtitlesMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<SubtitlesMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/subtitles', pathParamMap, subtitlesMediaInfo).then((response) => {
      return new SubtitlesMediaInfo(response);
    });
  }

  /**
   * @summary Delete Subtitles Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the subtitles media.
   * @throws {RequiredError}
   * @memberof SubtitlesApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/subtitles/{media_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Subtitles Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the subtitles media.
   * @throws {RequiredError}
   * @memberof SubtitlesApi
   */
  public get(manifestId: string, mediaId: string): Promise<SubtitlesMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<SubtitlesMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/subtitles/{media_id}', pathParamMap).then((response) => {
      return new SubtitlesMediaInfo(response);
    });
  }

  /**
   * @summary List all Subtitles Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SubtitlesApi
   */
  public list(manifestId: string, queryParams?: SubtitlesMediaInfoListQueryParams): Promise<PaginationResponse<SubtitlesMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<PaginationResponse<SubtitlesMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/subtitles', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SubtitlesMediaInfo>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SubtitlesMediaInfo(i));
      }
      return paginationResponse;
    });
  }
}
