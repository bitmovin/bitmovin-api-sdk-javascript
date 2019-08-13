import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import EncodingErrorDefinition from '../../models/EncodingErrorDefinition';
import PaginationResponse from '../../models/PaginationResponse';
import {EncodingErrorDefinitionListQueryParams, EncodingErrorDefinitionListQueryParamsBuilder} from './EncodingErrorDefinitionListQueryParams';
import {getType, map} from '../../common/Mapper';

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
   * @summary List all possible encoding error definitions
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ErrorDefinitionsApi
   */
  public list(queryParameters?: EncodingErrorDefinitionListQueryParams | ((q: EncodingErrorDefinitionListQueryParamsBuilder) => EncodingErrorDefinitionListQueryParamsBuilder)): Promise<PaginationResponse<EncodingErrorDefinition>> {
    let queryParams: EncodingErrorDefinitionListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingErrorDefinitionListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EncodingErrorDefinition>>('/encoding/error-definitions', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingErrorDefinition>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingErrorDefinition(i));
      }
      return paginationResponse;
    });
  }
}
