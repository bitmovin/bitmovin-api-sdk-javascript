import {BaseAPI} from '../../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../../common/Mapper';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';
import BitmovinResponse from '../../../../../../../../models/BitmovinResponse';
import DashCmafDrmRepresentation from '../../../../../../../../models/DashCmafDrmRepresentation';
import PaginationResponse from '../../../../../../../../models/PaginationResponse';
import {DashCmafDrmRepresentationListQueryParams, DashCmafDrmRepresentationListQueryParamsBuilder} from './DashCmafDrmRepresentationListQueryParams';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public contentprotection: ContentprotectionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.contentprotection = new ContentprotectionApi(configuration);
  }

  /**
   * @summary Add DRM CMAF Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashCmafDrmRepresentation} dashCmafDrmRepresentation The DRM CMAF representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashCmafDrmRepresentation?: DashCmafDrmRepresentation): Promise<DashCmafDrmRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashCmafDrmRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm', pathParamMap, dashCmafDrmRepresentation).then((response) => {
      return map(response, DashCmafDrmRepresentation);
    });
  }

  /**
   * @summary Delete DRM CMAF Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the DRM CMAF representation to be deleted
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DRM CMAF Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashCmafDrmRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashCmafDrmRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm/{representation_id}', pathParamMap).then((response) => {
      return map(response, DashCmafDrmRepresentation);
    });
  }

  /**
   * @summary List all DRM CMAF Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashCmafDrmRepresentationListQueryParams | ((q: DashCmafDrmRepresentationListQueryParamsBuilder) => DashCmafDrmRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashCmafDrmRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashCmafDrmRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashCmafDrmRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashCmafDrmRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashCmafDrmRepresentation>(response, DashCmafDrmRepresentation);
    });
  }
}
