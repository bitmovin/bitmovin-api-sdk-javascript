import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import NotificationStateEntry from '../../models/NotificationStateEntry';
import PaginationResponse from '../../models/PaginationResponse';
import {NotificationStateEntryListQueryParams, NotificationStateEntryListQueryParamsBuilder} from './NotificationStateEntryListQueryParams';

/**
 * StatesApi - object-oriented interface
 * @export
 * @class StatesApi
 * @extends {BaseAPI}
 */
export default class StatesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Notification State History (Specific Resource)
   * @param {string} notificationId Id of the notification
   * @param {string} resourceId Id of the resource, e.g. encoding id
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof StatesApi
   */
  public list(notificationId: string, resourceId: string, queryParameters?: NotificationStateEntryListQueryParams | ((q: NotificationStateEntryListQueryParamsBuilder) => NotificationStateEntryListQueryParamsBuilder)): Promise<PaginationResponse<NotificationStateEntry>> {
    const pathParamMap = {
      notification_id: notificationId,
      resource_id: resourceId
    };
    let queryParams: NotificationStateEntryListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new NotificationStateEntryListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<NotificationStateEntry>>('/notifications/{notification_id}/states/{resource_id}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<NotificationStateEntry>(response, NotificationStateEntry);;
    });
  }
}
