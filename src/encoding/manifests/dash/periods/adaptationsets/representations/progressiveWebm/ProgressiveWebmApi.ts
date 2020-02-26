import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import DashProgressiveWebmRepresentation from '../../../../../../../models/DashProgressiveWebmRepresentation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import {DashProgressiveWebmRepresentationListQueryParams, DashProgressiveWebmRepresentationListQueryParamsBuilder} from './DashProgressiveWebmRepresentationListQueryParams';

/**
 * ProgressiveWebmApi - object-oriented interface
 * @export
 * @class ProgressiveWebmApi
 * @extends {BaseAPI}
 */
export default class ProgressiveWebmApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Progressive WebM Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashProgressiveWebmRepresentation} dashProgressiveWebmRepresentation The Progressive WebM representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof ProgressiveWebmApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashProgressiveWebmRepresentation?: DashProgressiveWebmRepresentation): Promise<DashProgressiveWebmRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashProgressiveWebmRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/progressive-webm', pathParamMap, dashProgressiveWebmRepresentation).then((response) => {
      return map(response, DashProgressiveWebmRepresentation);
    });
  }

  /**
   * @summary Delete Progressive WebM Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the Progressive WebM representation to be deleted
   * @throws {BitmovinError}
   * @memberof ProgressiveWebmApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/progressive-webm/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Progressive WebM Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @throws {BitmovinError}
   * @memberof ProgressiveWebmApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashProgressiveWebmRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashProgressiveWebmRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/progressive-webm/{representation_id}', pathParamMap).then((response) => {
      return map(response, DashProgressiveWebmRepresentation);
    });
  }

  /**
   * @summary List all Progressive WebM Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ProgressiveWebmApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashProgressiveWebmRepresentationListQueryParams | ((q: DashProgressiveWebmRepresentationListQueryParamsBuilder) => DashProgressiveWebmRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashProgressiveWebmRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashProgressiveWebmRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashProgressiveWebmRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashProgressiveWebmRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/progressive-webm', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashProgressiveWebmRepresentation>(response, DashProgressiveWebmRepresentation);
    });
  }
}
