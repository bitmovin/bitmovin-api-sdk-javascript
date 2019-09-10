import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsPercentileQueryRequest from '../../../models/AnalyticsPercentileQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';

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
   * @throws {BitmovinError}
   * @memberof PercentileApi
   */
  public create(analyticsPercentileQueryRequest?: AnalyticsPercentileQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/percentile', {}, analyticsPercentileQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
