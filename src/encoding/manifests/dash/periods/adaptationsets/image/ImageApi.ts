import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import AdaptationSet from '../../../../../../models/AdaptationSet';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import ImageAdaptationSet from '../../../../../../models/ImageAdaptationSet';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {ImageAdaptationSetListQueryParams, ImageAdaptationSetListQueryParamsBuilder} from './ImageAdaptationSetListQueryParams';

/**
 * ImageApi - object-oriented interface
 * @export
 * @class ImageApi
 * @extends {BaseAPI}
 */
export default class ImageApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Image AdaptationSet
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {ImageAdaptationSet} imageAdaptationSet The image adaptation set to be added to the period
   * @throws {BitmovinError}
   * @memberof ImageApi
   */
  public create(manifestId: string, periodId: string, imageAdaptationSet?: ImageAdaptationSet): Promise<ImageAdaptationSet> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    return this.restClient.post<ImageAdaptationSet>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/image', pathParamMap, imageAdaptationSet).then((response) => {
      return map(response, ImageAdaptationSet);
    });
  }

  /**
   * @summary Delete Image AdaptationSet
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the audio adaptation set to be deleted
   * @throws {BitmovinError}
   * @memberof ImageApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/image/{adaptationset_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Image AdaptationSet Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the Image adaptation set
   * @throws {BitmovinError}
   * @memberof ImageApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string): Promise<ImageAdaptationSet> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.get<ImageAdaptationSet>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/image/{adaptationset_id}', pathParamMap).then((response) => {
      return map(response, ImageAdaptationSet);
    });
  }

  /**
   * @summary List all Image AdaptationSets
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ImageApi
   */
  public list(manifestId: string, periodId: string, queryParameters?: ImageAdaptationSetListQueryParams | ((q: ImageAdaptationSetListQueryParamsBuilder) => ImageAdaptationSetListQueryParamsBuilder)): Promise<PaginationResponse<ImageAdaptationSet>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    let queryParams: ImageAdaptationSetListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ImageAdaptationSetListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ImageAdaptationSet>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/image', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ImageAdaptationSet>(response, ImageAdaptationSet);
    });
  }
}
