import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AdAnalyticsStddevQueryRequest from '../../../../models/AdAnalyticsStddevQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';

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
   * @param {AdAnalyticsStddevQueryRequest} adAnalyticsStddevQueryRequest Analytics Query Object
   * @throws {BitmovinError}
   * @memberof StddevApi
   */
  public create(adAnalyticsStddevQueryRequest?: AdAnalyticsStddevQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/stddev', {}, adAnalyticsStddevQueryRequest).then((response) => {
      return map(response, AnalyticsResponse);
    });
  }
}
