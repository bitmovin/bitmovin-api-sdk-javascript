import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import IFramePlaylist from '../../../../../../models/IFramePlaylist';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import IFramePlaylistListQueryParams from './IFramePlaylistListQueryParams';

/**
 * IframeApi - object-oriented interface
 * @export
 * @class IframeApi
 * @extends {BaseAPI}
 */
export default class IframeApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add I-frame playlist to video media
   * @param {string} manifestId Id of the hls manifest
   * @param {string} mediaId Id of the video media
   * @param {IFramePlaylist} [iFramePlaylist]
   * @throws {RequiredError}
   * @memberof IframeApi
   */
  public create(manifestId: string, mediaId: string, iFramePlaylist?: IFramePlaylist): Promise<IFramePlaylist> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.post<IFramePlaylist>('/encoding/manifests/hls/{manifest_id}/media/video/{media_id}/iframe', pathParamMap, iFramePlaylist).then((response) => {
      return new IFramePlaylist(response);
    });
  }

  /**
   * @summary Delete I-frame playlist
   * @param {string} manifestId Id of the hls manifest
   * @param {string} mediaId Id of the video media
   * @param {string} iframeId Id of the Iframe-Playlist
   * @throws {RequiredError}
   * @memberof IframeApi
   */
  public delete(manifestId: string, mediaId: string, iframeId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId,
      iframe_id: iframeId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/video/{media_id}/iframe/{iframe_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary I-frame playlist Details
   * @param {string} manifestId Id of the hls manifest
   * @param {string} mediaId Id of the video media
   * @param {string} iframeId Id of the Iframe-Playlist
   * @throws {RequiredError}
   * @memberof IframeApi
   */
  public get(manifestId: string, mediaId: string, iframeId: string): Promise<IFramePlaylist> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId,
      iframe_id: iframeId
    };
    return this.restClient.get<IFramePlaylist>('/encoding/manifests/hls/{manifest_id}/media/video/{media_id}/iframe/{iframe_id}', pathParamMap).then((response) => {
      return new IFramePlaylist(response);
    });
  }

  /**
   * @summary List all I-frame playlists of a video media
   * @param {string} manifestId Id of the hls manifest
   * @param {string} mediaId Id of the video media
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof IframeApi
   */
  public list(manifestId: string, mediaId: string, queryParams?: IFramePlaylistListQueryParams): Promise<PaginationResponse<IFramePlaylist>> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<PaginationResponse<IFramePlaylist>>('/encoding/manifests/hls/{manifest_id}/media/video/{media_id}/iframe', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<IFramePlaylist>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new IFramePlaylist(i));
      }
      return paginationResponse;
    });
  }
}
