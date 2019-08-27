import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import CustomTag from '../../../../../models/CustomTag';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {CustomTagListQueryParams, CustomTagListQueryParamsBuilder} from './CustomTagListQueryParams';

/**
 * CustomTagsApi - object-oriented interface
 * @export
 * @class CustomTagsApi
 * @extends {BaseAPI}
 */
export default class CustomTagsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Custom Tag to Audio Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media.
   * @param {CustomTag} customTag The Custom Tag to be added
   * @throws {RequiredError}
   * @memberof CustomTagsApi
   */
  public create(manifestId: string, mediaId: string, customTag?: CustomTag): Promise<CustomTag> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.post<CustomTag>('/encoding/manifests/hls/{manifest_id}/media/{media_id}/custom-tags', pathParamMap, customTag).then((response) => {
      return new CustomTag(response);
    });
  }

  /**
   * @summary Delete Custom Tag
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media.
   * @param {string} customTagId Id of the custom tag.
   * @throws {RequiredError}
   * @memberof CustomTagsApi
   */
  public delete(manifestId: string, mediaId: string, customTagId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId,
      custom_tag_id: customTagId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/{media_id}/custom-tags/{custom_tag_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Custom Tag Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media
   * @param {string} customTagId Id of the custom tag.
   * @throws {RequiredError}
   * @memberof CustomTagsApi
   */
  public get(manifestId: string, mediaId: string, customTagId: string): Promise<CustomTag> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId,
      custom_tag_id: customTagId
    };
    return this.restClient.get<CustomTag>('/encoding/manifests/hls/{manifest_id}/media/{media_id}/custom-tags/{custom_tag_id}', pathParamMap).then((response) => {
      return new CustomTag(response);
    });
  }

  /**
   * @summary List all Custom Tags of a Audio media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof CustomTagsApi
   */
  public list(manifestId: string, mediaId: string, queryParameters?: CustomTagListQueryParams | ((q: CustomTagListQueryParamsBuilder) => CustomTagListQueryParamsBuilder)): Promise<PaginationResponse<CustomTag>> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    let queryParams: CustomTagListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CustomTagListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CustomTag>>('/encoding/manifests/hls/{manifest_id}/media/{media_id}/custom-tags', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<CustomTag>(response, CustomTag);;
    });
  }
}
