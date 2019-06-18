import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import ErrorApi from './error/ErrorApi';
import FinishedApi from './finished/FinishedApi';
import Notification from '../../../../models/Notification';
import PaginationResponse from '../../../../models/PaginationResponse';
import NotificationListQueryParams from './NotificationListQueryParams';

/**
 * ManifestApi - object-oriented interface
 * @export
 * @class ManifestApi
 * @extends {BaseAPI}
 */
export default class ManifestApi extends BaseAPI {
  public error: ErrorApi;
  public finished: FinishedApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.error = new ErrorApi(configuration);
    this.finished = new FinishedApi(configuration);
  }

  /**
   * @summary List Webhook Notifications (Specific Manifest)
   * @param {string} manifestId Id of the manifest resource
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ManifestApi
   */
  public list(manifestId: string, queryParams?: NotificationListQueryParams): Promise<PaginationResponse<Notification>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<PaginationResponse<Notification>>('/notifications/webhooks/encoding/manifest/{manifest_id}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Notification>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Notification(i));
      }
      return paginationResponse;
    });
  }
}
