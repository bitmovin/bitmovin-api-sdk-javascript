import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsAvgQueryRequest from '../../../models/AnalyticsAvgQueryRequest';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';

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
   * @throws {BitmovinError}
   * @memberof AvgApi
   */
  public create(analyticsAvgQueryRequest?: AnalyticsAvgQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/avg', {}, analyticsAvgQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
