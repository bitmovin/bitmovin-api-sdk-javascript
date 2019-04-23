import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import DrmApi from './drm/DrmApi';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import DashCmafRepresentation from '../../../../../../../models/DashCmafRepresentation';
import DashSegmentedRepresentation from '../../../../../../../models/DashSegmentedRepresentation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import DashCmafRepresentationListQueryParams from './DashCmafRepresentationListQueryParams';

/**
 * CmafApi - object-oriented interface
 * @export
 * @class CmafApi
 * @extends {BaseAPI}
 */
export default class CmafApi extends BaseAPI {
  public drm: DrmApi;
  public contentprotection: ContentprotectionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.drm = new DrmApi(configuration);
    this.contentprotection = new ContentprotectionApi(configuration);
  }

  /**
   * @summary Add CMAF Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashCmafRepresentation} [dashCmafRepresentation] The CMAF representation to be added to the adaptation set
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashCmafRepresentation?: DashCmafRepresentation): Promise<DashCmafRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashCmafRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf', pathParamMap, dashCmafRepresentation).then((response) => {
      return new DashCmafRepresentation(response);
    });
  }

  /**
   * @summary Delete CMAF Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the CMAF representation to be deleted
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/{representation_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary CMAF Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashCmafRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashCmafRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/{representation_id}', pathParamMap).then((response) => {
      return new DashCmafRepresentation(response);
    });
  }

  /**
   * @summary List all CMAF Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParams?: DashCmafRepresentationListQueryParams): Promise<PaginationResponse<DashCmafRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.get<PaginationResponse<DashCmafRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DashCmafRepresentation>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DashCmafRepresentation(i));
      }
      return paginationResponse;
    });
  }
}
