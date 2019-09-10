import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import SubtitleAdaptationSet from '../../../../../../models/SubtitleAdaptationSet';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {SubtitleAdaptationSetListQueryParams, SubtitleAdaptationSetListQueryParamsBuilder} from './SubtitleAdaptationSetListQueryParams';

/**
 * SubtitleApi - object-oriented interface
 * @export
 * @class SubtitleApi
 * @extends {BaseAPI}
 */
export default class SubtitleApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Subtitle AdaptationSet
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {SubtitleAdaptationSet} subtitleAdaptationSet The subtitle adaptation set to be added to the period
   * @throws {BitmovinError}
   * @memberof SubtitleApi
   */
  public create(manifestId: string, periodId: string, subtitleAdaptationSet?: SubtitleAdaptationSet): Promise<SubtitleAdaptationSet> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    return this.restClient.post<SubtitleAdaptationSet>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/subtitle', pathParamMap, subtitleAdaptationSet).then((response) => {
      return map(response, SubtitleAdaptationSet);
    });
  }

  /**
   * @summary Delete Subtitle AdaptationSet
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the subtitle adaptation set to be deleted
   * @throws {BitmovinError}
   * @memberof SubtitleApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/subtitle/{adaptationset_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Subtitle AdaptationSet Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the subtitle adaptation set
   * @throws {BitmovinError}
   * @memberof SubtitleApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string): Promise<SubtitleAdaptationSet> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.get<SubtitleAdaptationSet>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/subtitle/{adaptationset_id}', pathParamMap).then((response) => {
      return map(response, SubtitleAdaptationSet);
    });
  }

  /**
   * @summary List all Subtitle AdaptationSets
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SubtitleApi
   */
  public list(manifestId: string, periodId: string, queryParameters?: SubtitleAdaptationSetListQueryParams | ((q: SubtitleAdaptationSetListQueryParamsBuilder) => SubtitleAdaptationSetListQueryParamsBuilder)): Promise<PaginationResponse<SubtitleAdaptationSet>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    let queryParams: SubtitleAdaptationSetListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SubtitleAdaptationSetListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SubtitleAdaptationSet>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/subtitle', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SubtitleAdaptationSet>(response, SubtitleAdaptationSet);
    });
  }
}
