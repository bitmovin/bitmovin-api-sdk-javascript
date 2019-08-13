import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsAvgQueryRequest from '../../../models/AnalyticsAvgQueryRequest';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';
import {getType, map} from '../../../common/Mapper';

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
   * @param {AnalyticsAvgQueryRequest} analyticsAvgQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof AvgApi
   */
  public create(analyticsAvgQueryRequest?: AnalyticsAvgQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/avg', {}, analyticsAvgQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
