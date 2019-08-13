import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AdAnalyticsCountQueryRequest from '../../../../models/AdAnalyticsCountQueryRequest';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';
import {getType, map} from '../../../../common/Mapper';

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
   * @throws {RequiredError}
   * @memberof CountApi
   */
  public create(adAnalyticsCountQueryRequest?: AdAnalyticsCountQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/count', {}, adAnalyticsCountQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
