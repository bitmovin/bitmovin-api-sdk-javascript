import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import SmoothStreamingRepresentation from '../../../../../models/SmoothStreamingRepresentation';
import PaginationResponse from '../../../../../models/PaginationResponse';
import { SmoothStreamingRepresentationListQueryParams, SmoothStreamingRepresentationListQueryParamsBuilder } from './SmoothStreamingRepresentationListQueryParams';

/**
 * Mp4Api - object-oriented interface
 * @export
 * @class Mp4Api
 * @extends {BaseAPI}
 */
export default class Mp4Api extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add MP4 Representation to Smooth Streaming Manifest
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {SmoothStreamingRepresentation} smoothStreamingRepresentation The MP4 Representation to be added
   * @throws {RequiredError}
   * @memberof Mp4Api
   */
  public create(manifestId: string, smoothStreamingRepresentation?: SmoothStreamingRepresentation): Promise<SmoothStreamingRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<SmoothStreamingRepresentation>('/encoding/manifests/smooth/{manifest_id}/representations/mp4', pathParamMap, smoothStreamingRepresentation).then((response) => {
      return new SmoothStreamingRepresentation(response);
    });
  }

  /**
   * @summary Delete Smooth Streaming MP4 Representation
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {string} representationId Id of the MP4 representation.
   * @throws {RequiredError}
   * @memberof Mp4Api
   */
  public delete(manifestId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/smooth/{manifest_id}/representations/mp4/{representation_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Smooth Streaming MP4 Representation Details
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {string} representationId Id of the MP4 representation.
   * @throws {RequiredError}
   * @memberof Mp4Api
   */
  public get(manifestId: string, representationId: string): Promise<SmoothStreamingRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      representation_id: representationId
    };
    return this.restClient.get<SmoothStreamingRepresentation>('/encoding/manifests/smooth/{manifest_id}/representations/mp4/{representation_id}', pathParamMap).then((response) => {
      return new SmoothStreamingRepresentation(response);
    });
  }

  /**
   * @summary List MP4 Representation
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Mp4Api
   */
  public list(manifestId: string, queryParameters?: SmoothStreamingRepresentationListQueryParams | ((q: SmoothStreamingRepresentationListQueryParamsBuilder) => SmoothStreamingRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<SmoothStreamingRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: SmoothStreamingRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new SmoothStreamingRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SmoothStreamingRepresentation>>('/encoding/manifests/smooth/{manifest_id}/representations/mp4', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SmoothStreamingRepresentation>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SmoothStreamingRepresentation(i));
      }
      return paginationResponse;
    });
  }
}
