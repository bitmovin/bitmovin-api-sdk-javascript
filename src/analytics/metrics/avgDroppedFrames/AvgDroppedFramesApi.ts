import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsAvgDroppedFramesResponse from '../../../models/AnalyticsAvgDroppedFramesResponse';
import AnalyticsMetricsQueryRequest from '../../../models/AnalyticsMetricsQueryRequest';
import {getType, map} from '../../../common/Mapper';

/**
 * AvgDroppedFramesApi - object-oriented interface
 * @export
 * @class AvgDroppedFramesApi
 * @extends {BaseAPI}
 */
export default class AvgDroppedFramesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get metrics data
   * @param {AnalyticsMetricsQueryRequest} analyticsMetricsQueryRequest Analytics metrics query object
   * @throws {RequiredError}
   * @memberof AvgDroppedFramesApi
   */
  public create(analyticsMetricsQueryRequest?: AnalyticsMetricsQueryRequest): Promise<AnalyticsAvgDroppedFramesResponse> {
    return this.restClient.post<AnalyticsAvgDroppedFramesResponse>('/analytics/metrics/avg-dropped-frames', {}, analyticsMetricsQueryRequest).then((response) => {
      return new AnalyticsAvgDroppedFramesResponse(response);
    });
  }
}
