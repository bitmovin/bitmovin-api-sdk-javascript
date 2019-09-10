import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import EncodingErrorDefinition from '../../models/EncodingErrorDefinition';
import PaginationResponse from '../../models/PaginationResponse';
import {EncodingErrorDefinitionListQueryParams, EncodingErrorDefinitionListQueryParamsBuilder} from './EncodingErrorDefinitionListQueryParams';

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
   * @throws {BitmovinError}
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
      return new PaginationResponse<EncodingErrorDefinition>(response, EncodingErrorDefinition);
    });
  }
}
