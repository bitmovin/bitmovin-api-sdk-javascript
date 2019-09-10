import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import TypeApi from './type/TypeApi';
import DashApi from './dash/DashApi';
import HlsApi from './hls/HlsApi';
import SmoothApi from './smooth/SmoothApi';
import Manifest from '../../models/Manifest';
import PaginationResponse from '../../models/PaginationResponse';
import {ManifestListQueryParams, ManifestListQueryParamsBuilder} from './ManifestListQueryParams';

/**
 * ManifestsApi - object-oriented interface
 * @export
 * @class ManifestsApi
 * @extends {BaseAPI}
 */
export default class ManifestsApi extends BaseAPI {
  public type: TypeApi;
  public dash: DashApi;
  public hls: HlsApi;
  public smooth: SmoothApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.dash = new DashApi(configuration);
    this.hls = new HlsApi(configuration);
    this.smooth = new SmoothApi(configuration);
  }

  /**
   * @summary List all Manifests
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ManifestsApi
   */
  public list(queryParameters?: ManifestListQueryParams | ((q: ManifestListQueryParamsBuilder) => ManifestListQueryParamsBuilder)): Promise<PaginationResponse<Manifest>> {
    let queryParams: ManifestListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ManifestListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Manifest>>('/encoding/manifests', {}, queryParams).then((response) => {
      return new PaginationResponse<Manifest>(response, Manifest);
    });
  }
}
