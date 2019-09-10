import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AdAnalyticsMinQueryRequest from '../../../../models/AdAnalyticsMinQueryRequest';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

/**
 * MinApi - object-oriented interface
 * @export
 * @class MinApi
 * @extends {BaseAPI}
 */
export default class MinApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Min
   * @param {AdAnalyticsMinQueryRequest} adAnalyticsMinQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof MinApi
   */
  public create(adAnalyticsMinQueryRequest?: AdAnalyticsMinQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/min', {}, adAnalyticsMinQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
