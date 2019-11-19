import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import EmailNotification from '../../../models/EmailNotification';
import PaginationResponse from '../../../models/PaginationResponse';
import {EmailNotificationListQueryParams, EmailNotificationListQueryParamsBuilder} from './EmailNotificationListQueryParams';

/**
 * UsageReportsApi - object-oriented interface
 * @export
 * @class UsageReportsApi
 * @extends {BaseAPI}
 */
export default class UsageReportsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Email Notifications (All Usage Reports)
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof UsageReportsApi
   */
  public list(queryParameters?: EmailNotificationListQueryParams | ((q: EmailNotificationListQueryParamsBuilder) => EmailNotificationListQueryParamsBuilder)): Promise<PaginationResponse<EmailNotification>> {
    let queryParams: EmailNotificationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EmailNotificationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EmailNotification>>('/notifications/emails/usage-reports', {}, queryParams).then((response) => {
      return new PaginationResponse<EmailNotification>(response, EmailNotification);
    });
  }
}
