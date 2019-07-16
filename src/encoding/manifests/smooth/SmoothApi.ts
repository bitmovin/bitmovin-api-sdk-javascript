import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import DefaultApi from './default/DefaultApi';
import CustomdataApi from './customdata/CustomdataApi';
import RepresentationsApi from './representations/RepresentationsApi';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import SmoothStreamingManifest from '../../../models/SmoothStreamingManifest';
import Task from '../../../models/Task';
import PaginationResponse from '../../../models/PaginationResponse';
import { SmoothStreamingManifestListQueryParams, SmoothStreamingManifestListQueryParamsBuilder } from './SmoothStreamingManifestListQueryParams';

/**
 * SmoothApi - object-oriented interface
 * @export
 * @class SmoothApi
 * @extends {BaseAPI}
 */
export default class SmoothApi extends BaseAPI {
  public default: DefaultApi;
  public customdata: CustomdataApi;
  public representations: RepresentationsApi;
  public contentprotection: ContentprotectionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.default = new DefaultApi(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.representations = new RepresentationsApi(configuration);
    this.contentprotection = new ContentprotectionApi(configuration);
  }

  /**
   * @summary Create Smooth Streaming Manifest
   * @param {SmoothStreamingManifest} smoothStreamingManifest The Smooth Streaming Manifest to be created
   * @throws {RequiredError}
   * @memberof SmoothApi
   */
  public create(smoothStreamingManifest?: SmoothStreamingManifest): Promise<SmoothStreamingManifest> {
    return this.restClient.post<SmoothStreamingManifest>('/encoding/manifests/smooth', {}, smoothStreamingManifest).then((response) => {
      return new SmoothStreamingManifest(response);
    });
  }

  /**
   * @summary Delete Smooth Streaming Manifest
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @throws {RequiredError}
   * @memberof SmoothApi
   */
  public delete(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/smooth/{manifest_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Smooth Streaming Manifest Details
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @throws {RequiredError}
   * @memberof SmoothApi
   */
  public get(manifestId: string): Promise<SmoothStreamingManifest> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<SmoothStreamingManifest>('/encoding/manifests/smooth/{manifest_id}', pathParamMap).then((response) => {
      return new SmoothStreamingManifest(response);
    });
  }

  /**
   * @summary List Smooth Streaming Manifests
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SmoothApi
   */
  public list(queryParameters?: SmoothStreamingManifestListQueryParams | ((q: SmoothStreamingManifestListQueryParamsBuilder) => SmoothStreamingManifestListQueryParamsBuilder)): Promise<PaginationResponse<SmoothStreamingManifest>> {
    let queryParams: SmoothStreamingManifestListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new SmoothStreamingManifestListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SmoothStreamingManifest>>('/encoding/manifests/smooth', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SmoothStreamingManifest>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SmoothStreamingManifest(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary Start Smooth Streaming Manifest Creation
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @throws {RequiredError}
   * @memberof SmoothApi
   */
  public start(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/smooth/{manifest_id}/start', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Smooth Streaming Manifest Creation Status
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @throws {RequiredError}
   * @memberof SmoothApi
   */
  public status(manifestId: string): Promise<Task> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<Task>('/encoding/manifests/smooth/{manifest_id}/status', pathParamMap).then((response) => {
      return new Task(response);
    });
  }

  /**
   * @summary Stop Smooth Streaming Manifest Creation
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @throws {RequiredError}
   * @memberof SmoothApi
   */
  public stop(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/smooth/{manifest_id}/stop', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }
}
