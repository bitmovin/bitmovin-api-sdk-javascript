import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AdAnalyticsSumQueryRequest from '../../../../models/AdAnalyticsSumQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

/**
 * SumApi - object-oriented interface
 * @export
 * @class SumApi
 * @extends {BaseAPI}
 */
export default class SumApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Sum
   * @param {AdAnalyticsSumQueryRequest} adAnalyticsSumQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof SumApi
   */
  public create(adAnalyticsSumQueryRequest?: AdAnalyticsSumQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/sum', {}, adAnalyticsSumQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
