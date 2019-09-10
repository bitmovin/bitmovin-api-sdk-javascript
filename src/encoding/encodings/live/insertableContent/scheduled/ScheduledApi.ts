import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import ScheduledInsertableContent from '../../../../../models/ScheduledInsertableContent';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {ScheduledInsertableContentListQueryParams, ScheduledInsertableContentListQueryParamsBuilder} from './ScheduledInsertableContentListQueryParams';

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
   * @throws {BitmovinError}
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
      return new PaginationResponse<ScheduledInsertableContent>(response, ScheduledInsertableContent);
    });
  }
}
