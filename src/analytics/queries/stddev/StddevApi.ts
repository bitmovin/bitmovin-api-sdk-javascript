import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';
import AnalyticsStddevQueryRequest from '../../../models/AnalyticsStddevQueryRequest';

/**
 * StddevApi - object-oriented interface
 * @export
 * @class StddevApi
 * @extends {BaseAPI}
 */
export default class StddevApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Stddev
   * @param {AnalyticsStddevQueryRequest} analyticsStddevQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof StddevApi
   */
  public create(analyticsStddevQueryRequest?: AnalyticsStddevQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/stddev', {}, analyticsStddevQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
