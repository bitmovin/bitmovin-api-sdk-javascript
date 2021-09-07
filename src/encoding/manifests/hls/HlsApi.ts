import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DefaultApi from './default/DefaultApi';
import CustomdataApi from './customdata/CustomdataApi';
import StreamsApi from './streams/StreamsApi';
import MediaApi from './media/MediaApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import HlsManifest from '../../../models/HlsManifest';
import Task from '../../../models/Task';
import PaginationResponse from '../../../models/PaginationResponse';
import {HlsManifestListQueryParams, HlsManifestListQueryParamsBuilder} from './HlsManifestListQueryParams';

/**
 * HlsApi - object-oriented interface
 * @export
 * @class HlsApi
 * @extends {BaseAPI}
 */
export default class HlsApi extends BaseAPI {
  public default: DefaultApi;
  public customdata: CustomdataApi;
  public streams: StreamsApi;
  public media: MediaApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.default = new DefaultApi(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.streams = new StreamsApi(configuration);
    this.media = new MediaApi(configuration);
  }

  /**
   * @summary Create HLS Manifest
   * @param {HlsManifest} hlsManifest The HLS Manifest to be created
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public create(hlsManifest?: HlsManifest): Promise<HlsManifest> {
    return this.restClient.post<HlsManifest>('/encoding/manifests/hls', {}, hlsManifest).then((response) => {
      return map(response, HlsManifest);
    });
  }

  /**
   * @summary Delete HLS Manifest
   * @param {string} manifestId Id of the hls manifest.
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public delete(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary HLS Manifest Details
   * @param {string} manifestId Id of the hls manifest.
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public get(manifestId: string): Promise<HlsManifest> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<HlsManifest>('/encoding/manifests/hls/{manifest_id}', pathParamMap).then((response) => {
      return map(response, HlsManifest);
    });
  }

  /**
   * @summary List HLS Manifests
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public list(queryParameters?: HlsManifestListQueryParams | ((q: HlsManifestListQueryParamsBuilder) => HlsManifestListQueryParamsBuilder)): Promise<PaginationResponse<HlsManifest>> {
    let queryParams: HlsManifestListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new HlsManifestListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<HlsManifest>>('/encoding/manifests/hls', {}, queryParams).then((response) => {
      return new PaginationResponse<HlsManifest>(response, HlsManifest);
    });
  }

  /**
   * @summary Start HLS Manifest Creation
   * @param {string} manifestId Id of the HLS manifest.
   * @param {any} [body] Manifest Startup Options
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public start(manifestId: string, body?: any): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/start', pathParamMap, body).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary HLS Manifest Creation Status
   * @param {string} manifestId Id of the HLS manifest.
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public status(manifestId: string): Promise<Task> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<Task>('/encoding/manifests/hls/{manifest_id}/status', pathParamMap).then((response) => {
      return map(response, Task);
    });
  }

  /**
   * @summary Stop HLS Manifest Creation
   * @param {string} manifestId Id of the HLS manifest.
   * @throws {BitmovinError}
   * @memberof HlsApi
   */
  public stop(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/stop', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
