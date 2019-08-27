import {BaseAPI} from '../../../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../../../common/Configuration';
import BitmovinResponse from '../../../../../../../../../models/BitmovinResponse';
import ContentProtection from '../../../../../../../../../models/ContentProtection';
import PaginationResponse from '../../../../../../../../../models/PaginationResponse';
import {ContentProtectionListQueryParams, ContentProtectionListQueryParamsBuilder} from './ContentProtectionListQueryParams';

/**
 * ContentprotectionApi - object-oriented interface
 * @export
 * @class ContentprotectionApi
 * @extends {BaseAPI}
 */
export default class ContentprotectionApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Content Protection to DRM CMAF Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @param {ContentProtection} contentProtection The content protection to be added to the DRM CMAF representation
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, representationId: string, contentProtection?: ContentProtection): Promise<ContentProtection> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.post<ContentProtection>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm/{representation_id}/contentprotection', pathParamMap, contentProtection).then((response) => {
      return new ContentProtection(response);
    });
  }

  /**
   * @summary Delete DRM CMAF Representation Content Protection
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @param {string} contentprotectionId Id of the DRM CMAF content protection to be deleted
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string, contentprotectionId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId,
      contentprotection_id: contentprotectionId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm/{representation_id}/contentprotection/{contentprotection_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary DRM CMAF Representation Content Protection Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @param {string} contentprotectionId Id of the DRM CMAF content protection
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string, contentprotectionId: string): Promise<ContentProtection> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId,
      contentprotection_id: contentprotectionId
    };
    return this.restClient.get<ContentProtection>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm/{representation_id}/contentprotection/{contentprotection_id}', pathParamMap).then((response) => {
      return new ContentProtection(response);
    });
  }

  /**
   * @summary List all DRM CMAF Representation Content Protections
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, representationId: string, queryParameters?: ContentProtectionListQueryParams | ((q: ContentProtectionListQueryParamsBuilder) => ContentProtectionListQueryParamsBuilder)): Promise<PaginationResponse<ContentProtection>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    let queryParams: ContentProtectionListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ContentProtectionListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ContentProtection>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/cmaf/drm/{representation_id}/contentprotection', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ContentProtection>(response, ContentProtection);;
    });
  }
}
