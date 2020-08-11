import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import DashChunkedTextRepresentation from '../../../../../../../models/DashChunkedTextRepresentation';
import DashSegmentedRepresentation from '../../../../../../../models/DashSegmentedRepresentation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import {DashChunkedTextRepresentationListQueryParams, DashChunkedTextRepresentationListQueryParamsBuilder} from './DashChunkedTextRepresentationListQueryParams';

/**
 * ChunkedTextApi - object-oriented interface
 * @export
 * @class ChunkedTextApi
 * @extends {BaseAPI}
 */
export default class ChunkedTextApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Chunked Text Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashChunkedTextRepresentation} dashChunkedTextRepresentation The Chunked Text Representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashChunkedTextRepresentation?: DashChunkedTextRepresentation): Promise<DashChunkedTextRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashChunkedTextRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/chunked-text', pathParamMap, dashChunkedTextRepresentation).then((response) => {
      return map(response, DashChunkedTextRepresentation);
    });
  }

  /**
   * @summary Delete Chunked Text Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the Chunked Text Representation to be deleted
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/chunked-text/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Chunked Text Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashChunkedTextRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashChunkedTextRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/chunked-text/{representation_id}', pathParamMap).then((response) => {
      return map(response, DashChunkedTextRepresentation);
    });
  }

  /**
   * @summary List all Chunked Text Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ChunkedTextApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashChunkedTextRepresentationListQueryParams | ((q: DashChunkedTextRepresentationListQueryParamsBuilder) => DashChunkedTextRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashChunkedTextRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashChunkedTextRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashChunkedTextRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashChunkedTextRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/chunked-text', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashChunkedTextRepresentation>(response, DashChunkedTextRepresentation);
    });
  }
}
