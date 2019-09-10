import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsAvgConcurrentViewersResponse from '../../../models/AnalyticsAvgConcurrentViewersResponse';
import AnalyticsMetricsQueryRequest from '../../../models/AnalyticsMetricsQueryRequest';

/**
 * AvgConcurrentviewersApi - object-oriented interface
 * @export
 * @class AvgConcurrentviewersApi
 * @extends {BaseAPI}
 */
export default class AvgConcurrentviewersApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get metrics data
   * @param {AnalyticsMetricsQueryRequest} analyticsMetricsQueryRequest Analytics metrics query object
   * @throws {BitmovinError}
   * @memberof AvgConcurrentviewersApi
   */
  public create(analyticsMetricsQueryRequest?: AnalyticsMetricsQueryRequest): Promise<AnalyticsAvgConcurrentViewersResponse> {
    return this.restClient.post<AnalyticsAvgConcurrentViewersResponse>('/analytics/metrics/avg-concurrentviewers', {}, analyticsMetricsQueryRequest).then((response) => {
      return map(response, AnalyticsAvgConcurrentViewersResponse);
    });
  }
}
