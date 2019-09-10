import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import DrmApi from './drm/DrmApi';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import DashCmafRepresentation from '../../../../../../../models/DashCmafRepresentation';
import DashSegmentedRepresentation from '../../../../../../../models/DashSegmentedRepresentation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import {DashCmafRepresentationListQueryParams, DashCmafRepresentationListQueryParamsBuilder} from './DashCmafRepresentationListQueryParams';

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
   * @param {DashCmafRepresentation} dashCmafRepresentation The CMAF representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof CmafApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashCmafRepresentation?: DashCmafRepresentation): Promise<DashCmafRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashCmafRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf', pathParamMap, dashCmafRepresentation).then((response) => {
      return map(response, DashCmafRepresentation);
    });
  }

  /**
   * @summary Delete CMAF Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the CMAF representation to be deleted
   * @throws {BitmovinError}
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
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary CMAF Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @throws {BitmovinError}
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
      return map(response, DashCmafRepresentation);
    });
  }

  /**
   * @summary List all CMAF Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof CmafApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashCmafRepresentationListQueryParams | ((q: DashCmafRepresentationListQueryParamsBuilder) => DashCmafRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashCmafRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashCmafRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashCmafRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashCmafRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashCmafRepresentation>(response, DashCmafRepresentation);
    });
  }
}
