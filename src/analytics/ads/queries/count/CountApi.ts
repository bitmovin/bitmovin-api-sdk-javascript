import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AdAnalyticsCountQueryRequest from '../../../../models/AdAnalyticsCountQueryRequest';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

/**
 * CountApi - object-oriented interface
 * @export
 * @class CountApi
 * @extends {BaseAPI}
 */
export default class CountApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Count
   * @param {AdAnalyticsCountQueryRequest} adAnalyticsCountQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof CountApi
   */
  public create(adAnalyticsCountQueryRequest?: AdAnalyticsCountQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/count', {}, adAnalyticsCountQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
