import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsMaxConcurrentViewersResponse from '../../../models/AnalyticsMaxConcurrentViewersResponse';
import AnalyticsMetricsQueryRequest from '../../../models/AnalyticsMetricsQueryRequest';

/**
 * MaxConcurrentviewersApi - object-oriented interface
 * @export
 * @class MaxConcurrentviewersApi
 * @extends {BaseAPI}
 */
export default class MaxConcurrentviewersApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get metrics data
   * @param {AnalyticsMetricsQueryRequest} analyticsMetricsQueryRequest Analytics metrics query object
   * @throws {RequiredError}
   * @memberof MaxConcurrentviewersApi
   */
  public create(analyticsMetricsQueryRequest?: AnalyticsMetricsQueryRequest): Promise<AnalyticsMaxConcurrentViewersResponse> {
    return this.restClient.post<AnalyticsMaxConcurrentViewersResponse>('/analytics/metrics/max-concurrentviewers', {}, analyticsMetricsQueryRequest).then((response) => {
      return new AnalyticsMaxConcurrentViewersResponse(response);
    });
  }
}
