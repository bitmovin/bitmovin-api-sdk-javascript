import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
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
   * @summary Add Custom Tag to Variant Stream
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {CustomTag} customTag The Custom Tag to be added
   * @throws {BitmovinError}
   * @memberof CustomTagsApi
   */
  public create(manifestId: string, streamId: string, customTag?: CustomTag): Promise<CustomTag> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId
    };
    return this.restClient.post<CustomTag>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/custom-tags', pathParamMap, customTag).then((response) => {
      return map(response, CustomTag);
    });
  }

  /**
   * @summary Delete Custom Tag
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {string} customTagId Id of the custom tag.
   * @throws {BitmovinError}
   * @memberof CustomTagsApi
   */
  public delete(manifestId: string, streamId: string, customTagId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId,
      custom_tag_id: customTagId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/custom-tags/{custom_tag_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Custom Tag Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {string} customTagId Id of the custom tag.
   * @throws {BitmovinError}
   * @memberof CustomTagsApi
   */
  public get(manifestId: string, streamId: string, customTagId: string): Promise<CustomTag> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId,
      custom_tag_id: customTagId
    };
    return this.restClient.get<CustomTag>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/custom-tags/{custom_tag_id}', pathParamMap).then((response) => {
      return map(response, CustomTag);
    });
  }

  /**
   * @summary List all Custom Tags of a Variant Stream
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof CustomTagsApi
   */
  public list(manifestId: string, streamId: string, queryParameters?: CustomTagListQueryParams | ((q: CustomTagListQueryParamsBuilder) => CustomTagListQueryParamsBuilder)): Promise<PaginationResponse<CustomTag>> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId
    };
    let queryParams: CustomTagListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CustomTagListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CustomTag>>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/custom-tags', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<CustomTag>(response, CustomTag);
    });
  }
}
