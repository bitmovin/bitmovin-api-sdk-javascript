import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';
import AnalyticsSumQueryRequest from '../../../models/AnalyticsSumQueryRequest';
import {getType, map} from '../../../common/Mapper';

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
   * @param {AnalyticsSumQueryRequest} analyticsSumQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof SumApi
   */
  public create(analyticsSumQueryRequest?: AnalyticsSumQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/sum', {}, analyticsSumQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
