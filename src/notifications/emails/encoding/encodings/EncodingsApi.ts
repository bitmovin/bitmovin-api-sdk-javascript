import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import LiveInputStreamChangedApi from './liveInputStreamChanged/LiveInputStreamChangedApi';
import ErrorApi from './error/ErrorApi';
import EmailNotificationWithStreamConditions from '../../../../models/EmailNotificationWithStreamConditions';
import PaginationResponse from '../../../../models/PaginationResponse';
import { EmailNotificationWithStreamConditionsListQueryParams, EmailNotificationWithStreamConditionsListQueryParamsBuilder } from './EmailNotificationWithStreamConditionsListQueryParams';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {
  public liveInputStreamChanged: LiveInputStreamChangedApi;
  public error: ErrorApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.liveInputStreamChanged = new LiveInputStreamChangedApi(configuration);
    this.error = new ErrorApi(configuration);
  }

  /**
   * @summary List Email Notifications (Specific Encoding)
   * @param {string} encodingId Id of the encoding resource
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public list(encodingId: string, queryParameters?: EmailNotificationWithStreamConditionsListQueryParams | ((q: EmailNotificationWithStreamConditionsListQueryParamsBuilder) => EmailNotificationWithStreamConditionsListQueryParamsBuilder)): Promise<PaginationResponse<EmailNotificationWithStreamConditions>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: EmailNotificationWithStreamConditionsListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new EmailNotificationWithStreamConditionsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EmailNotificationWithStreamConditions>>('/notifications/emails/encoding/encodings/{encoding_id}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EmailNotificationWithStreamConditions>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EmailNotificationWithStreamConditions(i));
      }
      return paginationResponse;
    });
  }
}
