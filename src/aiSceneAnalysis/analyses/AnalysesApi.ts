import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import ByEncodingIdApi from './byEncodingId/ByEncodingIdApi';
import SceneAnalysisListItem from '../../models/SceneAnalysisListItem';
import SceneAnalysisListSort from '../../models/SceneAnalysisListSort';
import PaginationResponse from '../../models/PaginationResponse';
import {SceneAnalysisListItemListQueryParams, SceneAnalysisListItemListQueryParamsBuilder} from './SceneAnalysisListItemListQueryParams';

/**
 * AnalysesApi - object-oriented interface
 * @export
 * @class AnalysesApi
 * @extends {BaseAPI}
 */
export default class AnalysesApi extends BaseAPI {
  public byEncodingId: ByEncodingIdApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.byEncodingId = new ByEncodingIdApi(configuration);
  }

  /**
   * @summary List AI scene analyses
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AnalysesApi
   */
  public list(queryParameters?: SceneAnalysisListItemListQueryParams | ((q: SceneAnalysisListItemListQueryParamsBuilder) => SceneAnalysisListItemListQueryParamsBuilder)): Promise<PaginationResponse<SceneAnalysisListItem>> {
    let queryParams: SceneAnalysisListItemListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SceneAnalysisListItemListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SceneAnalysisListItem>>('/ai-scene-analysis/analyses', {}, queryParams).then((response) => {
      return new PaginationResponse<SceneAnalysisListItem>(response, SceneAnalysisListItem);
    });
  }
}
