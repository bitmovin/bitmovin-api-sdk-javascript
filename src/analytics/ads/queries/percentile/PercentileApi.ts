import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AdAnalyticsPercentileQueryRequest from '../../../../models/AdAnalyticsPercentileQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

/**
 * PercentileApi - object-oriented interface
 * @export
 * @class PercentileApi
 * @extends {BaseAPI}
 */
export default class PercentileApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Percentile
   * @param {AdAnalyticsPercentileQueryRequest} adAnalyticsPercentileQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof PercentileApi
   */
  public create(adAnalyticsPercentileQueryRequest?: AdAnalyticsPercentileQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/percentile', {}, adAnalyticsPercentileQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
