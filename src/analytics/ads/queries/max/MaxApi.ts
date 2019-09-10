import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AdAnalyticsMaxQueryRequest from '../../../../models/AdAnalyticsMaxQueryRequest';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

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
   * @param {AdAnalyticsMaxQueryRequest} adAnalyticsMaxQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof MaxApi
   */
  public create(adAnalyticsMaxQueryRequest?: AdAnalyticsMaxQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/max', {}, adAnalyticsMaxQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
