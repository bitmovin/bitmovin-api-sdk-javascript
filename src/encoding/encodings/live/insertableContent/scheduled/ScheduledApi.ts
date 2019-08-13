import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import ScheduledInsertableContent from '../../../../../models/ScheduledInsertableContent';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {ScheduledInsertableContentListQueryParams, ScheduledInsertableContentListQueryParamsBuilder} from './ScheduledInsertableContentListQueryParams';
import {getType, map} from '../../../../../common/Mapper';

/**
 * ScheduledApi - object-oriented interface
 * @export
 * @class ScheduledApi
 * @extends {BaseAPI}
 */
export default class ScheduledApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List All Scheduled Insertable Content For A Live Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ScheduledApi
   */
  public list(encodingId: string, queryParameters?: ScheduledInsertableContentListQueryParams | ((q: ScheduledInsertableContentListQueryParamsBuilder) => ScheduledInsertableContentListQueryParamsBuilder)): Promise<PaginationResponse<ScheduledInsertableContent>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ScheduledInsertableContentListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ScheduledInsertableContentListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ScheduledInsertableContent>>('/encoding/encodings/{encoding_id}/live/insertable-content/scheduled', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ScheduledInsertableContent>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ScheduledInsertableContent(i));
      }
      return paginationResponse;
    });
  }
}
