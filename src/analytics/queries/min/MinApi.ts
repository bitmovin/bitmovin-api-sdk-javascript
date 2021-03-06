import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsMinQueryRequest from '../../../models/AnalyticsMinQueryRequest';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';

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
   * @param {AnalyticsMinQueryRequest} analyticsMinQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof MinApi
   */
  public create(analyticsMinQueryRequest?: AnalyticsMinQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/min', {}, analyticsMinQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
