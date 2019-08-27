import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AdAnalyticsAvgQueryRequest from '../../../../models/AdAnalyticsAvgQueryRequest';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

/**
 * AvgApi - object-oriented interface
 * @export
 * @class AvgApi
 * @extends {BaseAPI}
 */
export default class AvgApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Avg
   * @param {AdAnalyticsAvgQueryRequest} adAnalyticsAvgQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof AvgApi
   */
  public create(adAnalyticsAvgQueryRequest?: AdAnalyticsAvgQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/avg', {}, adAnalyticsAvgQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
