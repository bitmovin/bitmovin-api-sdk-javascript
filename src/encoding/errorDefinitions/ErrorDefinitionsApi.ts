import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import EncodingErrorDefinition from '../../models/EncodingErrorDefinition';
import PaginationResponse from '../../models/PaginationResponse';
import EncodingErrorDefinitionListQueryParams from './EncodingErrorDefinitionListQueryParams';

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
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ErrorDefinitionsApi
   */
  public list(queryParams?: EncodingErrorDefinitionListQueryParams): Promise<PaginationResponse<EncodingErrorDefinition>> {
    return this.restClient.get<PaginationResponse<EncodingErrorDefinition>>('/encoding/error-definitions', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingErrorDefinition>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingErrorDefinition(i));
      }
      return paginationResponse;
    });
  }
}
