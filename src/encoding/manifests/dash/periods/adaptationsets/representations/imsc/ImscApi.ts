import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import DashImscRepresentation from '../../../../../../../models/DashImscRepresentation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import {DashImscRepresentationListQueryParams, DashImscRepresentationListQueryParamsBuilder} from './DashImscRepresentationListQueryParams';

/**
 * ImscApi - object-oriented interface
 * @export
 * @class ImscApi
 * @extends {BaseAPI}
 */
export default class ImscApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add IMSC Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashImscRepresentation} dashImscRepresentation The IMSC representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashImscRepresentation?: DashImscRepresentation): Promise<DashImscRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashImscRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/imsc', pathParamMap, dashImscRepresentation).then((response) => {
      return map(response, DashImscRepresentation);
    });
  }

  /**
   * @summary Delete IMSC Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the IMSC representation to be deleted
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/imsc/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary IMSC Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the IMSC representation
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashImscRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashImscRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/imsc/{representation_id}', pathParamMap).then((response) => {
      return map(response, DashImscRepresentation);
    });
  }

  /**
   * @summary List all IMSC Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashImscRepresentationListQueryParams | ((q: DashImscRepresentationListQueryParamsBuilder) => DashImscRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashImscRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashImscRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashImscRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashImscRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/imsc', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashImscRepresentation>(response, DashImscRepresentation);
    });
  }
}
