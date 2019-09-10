import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AdAnalyticsVarianceQueryRequest from '../../../../models/AdAnalyticsVarianceQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

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
   * @param {AdAnalyticsVarianceQueryRequest} adAnalyticsVarianceQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof VarianceApi
   */
  public create(adAnalyticsVarianceQueryRequest?: AdAnalyticsVarianceQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/variance', {}, adAnalyticsVarianceQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
