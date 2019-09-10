import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AdAnalyticsMedianQueryRequest from '../../../../models/AdAnalyticsMedianQueryRequest';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

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
   * @throws {BitmovinError}
   * @memberof MedianApi
   */
  public create(adAnalyticsMedianQueryRequest?: AdAnalyticsMedianQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/median', {}, adAnalyticsMedianQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
