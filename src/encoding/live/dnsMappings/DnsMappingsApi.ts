import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DnsMappingResponse from '../../../models/DnsMappingResponse';
import PaginationResponse from '../../../models/PaginationResponse';
import {DnsMappingResponseListQueryParams, DnsMappingResponseListQueryParamsBuilder} from './DnsMappingResponseListQueryParams';

/**
 * DnsMappingsApi - object-oriented interface
 * @export
 * @class DnsMappingsApi
 * @extends {BaseAPI}
 */
export default class DnsMappingsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List DNS Mappings
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DnsMappingsApi
   */
  public list(queryParameters?: DnsMappingResponseListQueryParams | ((q: DnsMappingResponseListQueryParamsBuilder) => DnsMappingResponseListQueryParamsBuilder)): Promise<PaginationResponse<DnsMappingResponse>> {
    let queryParams: DnsMappingResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DnsMappingResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DnsMappingResponse>>('/encoding/live/dns-mappings', {}, queryParams).then((response) => {
      return new PaginationResponse<DnsMappingResponse>(response, DnsMappingResponse);
    });
  }
}
