import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import DrmApi from './drm/DrmApi';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import DashMp4Representation from '../../../../../../../models/DashMp4Representation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import {DashMp4RepresentationListQueryParams, DashMp4RepresentationListQueryParamsBuilder} from './DashMp4RepresentationListQueryParams';

/**
 * Mp4Api - object-oriented interface
 * @export
 * @class Mp4Api
 * @extends {BaseAPI}
 */
export default class Mp4Api extends BaseAPI {
  public drm: DrmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.drm = new DrmApi(configuration);
  }

  /**
   * @summary Add MP4 Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashMp4Representation} dashMp4Representation The MP4 representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashMp4Representation?: DashMp4Representation): Promise<DashMp4Representation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashMp4Representation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/mp4', pathParamMap, dashMp4Representation).then((response) => {
      return map(response, DashMp4Representation);
    });
  }

  /**
   * @summary Delete MP4 Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the MP4 representation to be deleted
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/mp4/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary MP4 Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashMp4Representation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashMp4Representation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/mp4/{representation_id}', pathParamMap).then((response) => {
      return map(response, DashMp4Representation);
    });
  }

  /**
   * @summary List all MP4 Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashMp4RepresentationListQueryParams | ((q: DashMp4RepresentationListQueryParamsBuilder) => DashMp4RepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashMp4Representation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashMp4RepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashMp4RepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashMp4Representation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/mp4', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashMp4Representation>(response, DashMp4Representation);
    });
  }
}
