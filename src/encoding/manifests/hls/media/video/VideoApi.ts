import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import StandardMediaInfo from '../../../../../models/StandardMediaInfo';
import VideoMediaInfo from '../../../../../models/VideoMediaInfo';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {VideoMediaInfoListQueryParams, VideoMediaInfoListQueryParamsBuilder} from './VideoMediaInfoListQueryParams';
import {getType, map} from '../../../../../common/Mapper';

/**
 * VideoApi - object-oriented interface
 * @export
 * @class VideoApi
 * @extends {BaseAPI}
 */
export default class VideoApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Video Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {VideoMediaInfo} videoMediaInfo The Video Media to be added
   * @throws {RequiredError}
   * @memberof VideoApi
   */
  public create(manifestId: string, videoMediaInfo?: VideoMediaInfo): Promise<VideoMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<VideoMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/video', pathParamMap, videoMediaInfo).then((response) => {
      return new VideoMediaInfo(response);
    });
  }

  /**
   * @summary Delete Video Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the video media.
   * @throws {RequiredError}
   * @memberof VideoApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/video/{media_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Video Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the video media.
   * @throws {RequiredError}
   * @memberof VideoApi
   */
  public get(manifestId: string, mediaId: string): Promise<VideoMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<VideoMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/video/{media_id}', pathParamMap).then((response) => {
      return new VideoMediaInfo(response);
    });
  }

  /**
   * @summary List all Video Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VideoApi
   */
  public list(manifestId: string, queryParameters?: VideoMediaInfoListQueryParams | ((q: VideoMediaInfoListQueryParamsBuilder) => VideoMediaInfoListQueryParamsBuilder)): Promise<PaginationResponse<VideoMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: VideoMediaInfoListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new VideoMediaInfoListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<VideoMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/video', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<VideoMediaInfo>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new VideoMediaInfo(i));
      }
      return paginationResponse;
    });
  }
}
