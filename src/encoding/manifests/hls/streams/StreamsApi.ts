import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomTagsApi from './customTags/CustomTagsApi';
import IframeApi from './iframe/IframeApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import StreamInfo from '../../../../models/StreamInfo';
import PaginationResponse from '../../../../models/PaginationResponse';
import {StreamInfoListQueryParams, StreamInfoListQueryParamsBuilder} from './StreamInfoListQueryParams';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {
  public customTags: CustomTagsApi;
  public iframe: IframeApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customTags = new CustomTagsApi(configuration);
    this.iframe = new IframeApi(configuration);
  }

  /**
   * @summary Add Variant Stream
   * @param {string} manifestId Id of the hls manifest.
   * @param {StreamInfo} streamInfo The Variant Stream to be added
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public create(manifestId: string, streamInfo?: StreamInfo): Promise<StreamInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<StreamInfo>('/encoding/manifests/hls/{manifest_id}/streams', pathParamMap, streamInfo).then((response) => {
      return map(response, StreamInfo);
    });
  }

  /**
   * @summary Delete Variant Stream
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public delete(manifestId: string, streamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Variant Stream Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public get(manifestId: string, streamId: string): Promise<StreamInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId
    };
    return this.restClient.get<StreamInfo>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}', pathParamMap).then((response) => {
      return map(response, StreamInfo);
    });
  }

  /**
   * @summary List all Variant Streams
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof StreamsApi
   */
  public list(manifestId: string, queryParameters?: StreamInfoListQueryParams | ((q: StreamInfoListQueryParamsBuilder) => StreamInfoListQueryParamsBuilder)): Promise<PaginationResponse<StreamInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: StreamInfoListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamInfoListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamInfo>>('/encoding/manifests/hls/{manifest_id}/streams', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<StreamInfo>(response, StreamInfo);
    });
  }
}
