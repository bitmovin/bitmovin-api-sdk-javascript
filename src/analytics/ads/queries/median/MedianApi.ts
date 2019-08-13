import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AdAnalyticsMedianQueryRequest from '../../../../models/AdAnalyticsMedianQueryRequest';
import AnalyticsQueryRequest from '../../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';
import {getType, map} from '../../../../common/Mapper';

/**
 * MedianApi - object-oriented interface
 * @export
 * @class MedianApi
 * @extends {BaseAPI}
 */
export default class MedianApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Median
   * @param {AdAnalyticsMedianQueryRequest} adAnalyticsMedianQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof MedianApi
   */
  public create(adAnalyticsMedianQueryRequest?: AdAnalyticsMedianQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/median', {}, adAnalyticsMedianQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
