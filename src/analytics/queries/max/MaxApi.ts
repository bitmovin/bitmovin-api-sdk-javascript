import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsMaxQueryRequest from '../../../models/AnalyticsMaxQueryRequest';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';

/**
 * MaxApi - object-oriented interface
 * @export
 * @class MaxApi
 * @extends {BaseAPI}
 */
export default class MaxApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Max
   * @param {AnalyticsMaxQueryRequest} analyticsMaxQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof MaxApi
   */
  public create(analyticsMaxQueryRequest?: AnalyticsMaxQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/max', {}, analyticsMaxQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
