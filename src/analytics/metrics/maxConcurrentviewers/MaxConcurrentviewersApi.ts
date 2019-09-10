import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
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
   * @throws {BitmovinError}
   * @memberof MaxConcurrentviewersApi
   */
  public create(analyticsMetricsQueryRequest?: AnalyticsMetricsQueryRequest): Promise<AnalyticsMaxConcurrentViewersResponse> {
    return this.restClient.post<AnalyticsMaxConcurrentViewersResponse>('/analytics/metrics/max-concurrentviewers', {}, analyticsMetricsQueryRequest).then((response) => {
      return map(response, AnalyticsMaxConcurrentViewersResponse);
    });
  }
}
