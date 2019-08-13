import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AdAnalyticsMinQueryRequest from '../../../../models/AdAnalyticsMinQueryRequest';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';
import {getType, map} from '../../../../common/Mapper';

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
   * @throws {RequiredError}
   * @memberof MinApi
   */
  public create(adAnalyticsMinQueryRequest?: AdAnalyticsMinQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/min', {}, adAnalyticsMinQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
