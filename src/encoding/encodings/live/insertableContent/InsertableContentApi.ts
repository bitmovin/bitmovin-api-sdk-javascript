import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import InsertableContent from '../../../../models/InsertableContent';
import PaginationResponse from '../../../../models/PaginationResponse';
import { InsertableContentListQueryParams, InsertableContentListQueryParamsBuilder } from './InsertableContentListQueryParams';

/**
 * InsertableContentApi - object-oriented interface
 * @export
 * @class InsertableContentApi
 * @extends {BaseAPI}
 */
export default class InsertableContentApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Make Insertable Content Available For A Live Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {InsertableContent} insertableContent The insertable content to be created
   * @throws {RequiredError}
   * @memberof InsertableContentApi
   */
  public create(encodingId: string, insertableContent?: InsertableContent): Promise<InsertableContent> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<InsertableContent>('/encoding/encodings/{encoding_id}/live/insertable-content', pathParamMap, insertableContent).then((response) => {
      return new InsertableContent(response);
    });
  }

  /**
   * @summary List All Inseratble Content Available For A Live Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof InsertableContentApi
   */
  public list(encodingId: string, queryParameters?: InsertableContentListQueryParams | ((q: InsertableContentListQueryParamsBuilder) => InsertableContentListQueryParamsBuilder)): Promise<PaginationResponse<InsertableContent>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: InsertableContentListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new InsertableContentListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<InsertableContent>>('/encoding/encodings/{encoding_id}/live/insertable-content', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<InsertableContent>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new InsertableContent(i));
      }
      return paginationResponse;
    });
  }
}
