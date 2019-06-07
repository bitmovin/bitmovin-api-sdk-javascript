import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';
import AnalyticsStddevQueryRequest from '../../../models/AnalyticsStddevQueryRequest';

/**
 * StddevApi - object-oriented interface
 * @export
 * @class StddevApi
 * @extends {BaseAPI}
 */
export default class StddevApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Stddev
   * @param {AnalyticsStddevQueryRequest} analyticsStddevQueryRequest
   * @throws {RequiredError}
   * @memberof StddevApi
   */
  public create(analyticsStddevQueryRequest?: AnalyticsStddevQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/stddev', {}, analyticsStddevQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
