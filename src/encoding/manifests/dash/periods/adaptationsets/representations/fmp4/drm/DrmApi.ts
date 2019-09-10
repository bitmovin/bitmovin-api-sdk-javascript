import {BaseAPI} from '../../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../../common/Mapper';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';
import BitmovinResponse from '../../../../../../../../models/BitmovinResponse';
import DashFmp4DrmRepresentation from '../../../../../../../../models/DashFmp4DrmRepresentation';
import PaginationResponse from '../../../../../../../../models/PaginationResponse';
import {DashFmp4DrmRepresentationListQueryParams, DashFmp4DrmRepresentationListQueryParamsBuilder} from './DashFmp4DrmRepresentationListQueryParams';

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
   * @summary Add DRM fMP4 Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashFmp4DrmRepresentation} dashFmp4DrmRepresentation The DRM fMP4 representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashFmp4DrmRepresentation?: DashFmp4DrmRepresentation): Promise<DashFmp4DrmRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashFmp4DrmRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/fmp4/drm', pathParamMap, dashFmp4DrmRepresentation).then((response) => {
      return map(response, DashFmp4DrmRepresentation);
    });
  }

  /**
   * @summary Delete DRM fMP4 Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the DRM fMP4 representation to be deleted
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
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/fmp4/drm/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DRM fMP4 Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashFmp4DrmRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashFmp4DrmRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/fmp4/drm/{representation_id}', pathParamMap).then((response) => {
      return map(response, DashFmp4DrmRepresentation);
    });
  }

  /**
   * @summary List all DRM fMP4 Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashFmp4DrmRepresentationListQueryParams | ((q: DashFmp4DrmRepresentationListQueryParamsBuilder) => DashFmp4DrmRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashFmp4DrmRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashFmp4DrmRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashFmp4DrmRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashFmp4DrmRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/fmp4/drm', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashFmp4DrmRepresentation>(response, DashFmp4DrmRepresentation);
    });
  }
}
