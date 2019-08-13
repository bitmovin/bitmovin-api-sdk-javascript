import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';
import AnalyticsVarianceQueryRequest from '../../../models/AnalyticsVarianceQueryRequest';
import {getType, map} from '../../../common/Mapper';

/**
 * VarianceApi - object-oriented interface
 * @export
 * @class VarianceApi
 * @extends {BaseAPI}
 */
export default class VarianceApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Variance
   * @param {AnalyticsVarianceQueryRequest} analyticsVarianceQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof VarianceApi
   */
  public create(analyticsVarianceQueryRequest?: AnalyticsVarianceQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/variance', {}, analyticsVarianceQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
