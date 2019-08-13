import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import ScheduleApi from './schedule/ScheduleApi';
import ScheduledApi from './scheduled/ScheduledApi';
import StopApi from './stop/StopApi';
import InsertableContent from '../../../../models/InsertableContent';
import PaginationResponse from '../../../../models/PaginationResponse';
import {InsertableContentListQueryParams, InsertableContentListQueryParamsBuilder} from './InsertableContentListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * InsertableContentApi - object-oriented interface
 * @export
 * @class InsertableContentApi
 * @extends {BaseAPI}
 */
export default class InsertableContentApi extends BaseAPI {
  public schedule: ScheduleApi;
  public scheduled: ScheduledApi;
  public stop: StopApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.schedule = new ScheduleApi(configuration);
    this.scheduled = new ScheduledApi(configuration);
    this.stop = new StopApi(configuration);
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
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new InsertableContent(i));
      }
      return paginationResponse;
    });
  }
}
