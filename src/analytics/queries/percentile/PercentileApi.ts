import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsPercentileQueryRequest from '../../../models/AnalyticsPercentileQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';
import {getType, map} from '../../../common/Mapper';

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
   * @param {AnalyticsPercentileQueryRequest} analyticsPercentileQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof PercentileApi
   */
  public create(analyticsPercentileQueryRequest?: AnalyticsPercentileQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/percentile', {}, analyticsPercentileQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
