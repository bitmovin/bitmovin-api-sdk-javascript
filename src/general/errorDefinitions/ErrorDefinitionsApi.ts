import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import ApiErrorDefinition from '../../models/ApiErrorDefinition';
import PaginationResponse from '../../models/PaginationResponse';
import {ApiErrorDefinitionListQueryParams, ApiErrorDefinitionListQueryParamsBuilder} from './ApiErrorDefinitionListQueryParams';

/**
 * ErrorDefinitionsApi - object-oriented interface
 * @export
 * @class ErrorDefinitionsApi
 * @extends {BaseAPI}
 */
export default class ErrorDefinitionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List all possible api error definitions
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ErrorDefinitionsApi
   */
  public list(queryParameters?: ApiErrorDefinitionListQueryParams | ((q: ApiErrorDefinitionListQueryParamsBuilder) => ApiErrorDefinitionListQueryParamsBuilder)): Promise<PaginationResponse<ApiErrorDefinition>> {
    let queryParams: ApiErrorDefinitionListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ApiErrorDefinitionListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ApiErrorDefinition>>('/general/error-definitions', {}, queryParams).then((response) => {
      return new PaginationResponse<ApiErrorDefinition>(response, ApiErrorDefinition);
    });
  }
}
