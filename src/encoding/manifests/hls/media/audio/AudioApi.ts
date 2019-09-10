import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import AudioMediaInfo from '../../../../../models/AudioMediaInfo';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {AudioMediaInfoListQueryParams, AudioMediaInfoListQueryParamsBuilder} from './AudioMediaInfoListQueryParams';

/**
 * AudioApi - object-oriented interface
 * @export
 * @class AudioApi
 * @extends {BaseAPI}
 */
export default class AudioApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Audio Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {AudioMediaInfo} audioMediaInfo The Audio Media to be added
   * @throws {BitmovinError}
   * @memberof AudioApi
   */
  public create(manifestId: string, audioMediaInfo?: AudioMediaInfo): Promise<AudioMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<AudioMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/audio', pathParamMap, audioMediaInfo).then((response) => {
      return map(response, AudioMediaInfo);
    });
  }

  /**
   * @summary Delete Audio Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media.
   * @throws {BitmovinError}
   * @memberof AudioApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/audio/{media_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Audio Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media.
   * @throws {BitmovinError}
   * @memberof AudioApi
   */
  public get(manifestId: string, mediaId: string): Promise<AudioMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<AudioMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/audio/{media_id}', pathParamMap).then((response) => {
      return map(response, AudioMediaInfo);
    });
  }

  /**
   * @summary List all Audio Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AudioApi
   */
  public list(manifestId: string, queryParameters?: AudioMediaInfoListQueryParams | ((q: AudioMediaInfoListQueryParamsBuilder) => AudioMediaInfoListQueryParamsBuilder)): Promise<PaginationResponse<AudioMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: AudioMediaInfoListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AudioMediaInfoListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AudioMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/audio', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<AudioMediaInfo>(response, AudioMediaInfo);
    });
  }
}
