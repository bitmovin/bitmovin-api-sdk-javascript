import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import AudioAdaptationSet from '../../../../../../models/AudioAdaptationSet';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import AudioAdaptationSetListQueryParams from './AudioAdaptationSetListQueryParams';

/**
 * AudioApi - object-oriented interface
 * @export
 * @class AudioApi
 * @extends {BaseAPI}
 */
export default class AudioApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Audio AdaptationSet
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {AudioAdaptationSet} [audioAdaptationSet] The audio adaptation set to be added to the period
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public create(manifestId: string, periodId: string, audioAdaptationSet?: AudioAdaptationSet): Promise<AudioAdaptationSet> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    return this.restClient.post<AudioAdaptationSet>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/audio', pathParamMap, audioAdaptationSet).then((response) => {
      return new AudioAdaptationSet(response);
    });
  }

  /**
   * @summary Delete Audio AdaptationSet
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the audio adaptation set to be deleted
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/audio/{adaptationset_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Audio AdaptationSet Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the audio adaptation set
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string): Promise<AudioAdaptationSet> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.get<AudioAdaptationSet>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/audio/{adaptationset_id}', pathParamMap).then((response) => {
      return new AudioAdaptationSet(response);
    });
  }

  /**
   * @summary List all Audio AdaptationSets
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public list(manifestId: string, periodId: string, queryParams?: AudioAdaptationSetListQueryParams): Promise<PaginationResponse<AudioAdaptationSet>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    return this.restClient.get<PaginationResponse<AudioAdaptationSet>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/audio', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AudioAdaptationSet>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AudioAdaptationSet(i));
      }
      return paginationResponse;
    });
  }
}
