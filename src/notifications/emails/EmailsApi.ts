import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import UsageReportsApi from './usageReports/UsageReportsApi';
import EncodingApi from './encoding/EncodingApi';
import Notification from '../../models/Notification';
import PaginationResponse from '../../models/PaginationResponse';
import {NotificationListQueryParams, NotificationListQueryParamsBuilder} from './NotificationListQueryParams';

/**
 * EmailsApi - object-oriented interface
 * @export
 * @class EmailsApi
 * @extends {BaseAPI}
 */
export default class EmailsApi extends BaseAPI {
  public usageReports: UsageReportsApi;
  public encoding: EncodingApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.usageReports = new UsageReportsApi(configuration);
    this.encoding = new EncodingApi(configuration);
  }

  /**
   * @summary List Email Notifications
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof EmailsApi
   */
  public list(queryParameters?: NotificationListQueryParams | ((q: NotificationListQueryParamsBuilder) => NotificationListQueryParamsBuilder)): Promise<PaginationResponse<Notification>> {
    let queryParams: NotificationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new NotificationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Notification>>('/notifications/emails', {}, queryParams).then((response) => {
      return new PaginationResponse<Notification>(response, Notification);
    });
  }
}
