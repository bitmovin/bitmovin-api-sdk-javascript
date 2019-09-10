import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import ErrorApi from './error/ErrorApi';
import FinishedApi from './finished/FinishedApi';
import Notification from '../../../../models/Notification';
import PaginationResponse from '../../../../models/PaginationResponse';
import {NotificationListQueryParams, NotificationListQueryParamsBuilder} from './NotificationListQueryParams';

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
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ManifestApi
   */
  public list(manifestId: string, queryParameters?: NotificationListQueryParams | ((q: NotificationListQueryParamsBuilder) => NotificationListQueryParamsBuilder)): Promise<PaginationResponse<Notification>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: NotificationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new NotificationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Notification>>('/notifications/webhooks/encoding/manifest/{manifest_id}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Notification>(response, Notification);
    });
  }
}
