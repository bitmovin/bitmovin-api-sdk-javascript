import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import EncodingApi from './encoding/EncodingApi';
import Notification from '../../models/Notification';
import PaginationResponse from '../../models/PaginationResponse';
import NotificationListQueryParams from './NotificationListQueryParams';

/**
 * EmailsApi - object-oriented interface
 * @export
 * @class EmailsApi
 * @extends {BaseAPI}
 */
export default class EmailsApi extends BaseAPI {
  public encoding: EncodingApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.encoding = new EncodingApi(configuration);
  }

  /**
   * @summary List Email Notifications
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof EmailsApi
   */
  public list(queryParams?: NotificationListQueryParams): Promise<PaginationResponse<Notification>> {
    return this.restClient.get<PaginationResponse<Notification>>('/notifications/emails', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Notification>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Notification(i));
      }
      return paginationResponse;
    });
  }
}
