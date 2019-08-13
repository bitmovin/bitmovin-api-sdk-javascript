import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AdAnalyticsQueryRequest from '../../../../models/AdAnalyticsQueryRequest';
import AdAnalyticsStddevQueryRequest from '../../../../models/AdAnalyticsStddevQueryRequest';
import AnalyticsResponse from '../../../../models/AnalyticsResponse';
import {getType, map} from '../../../../common/Mapper';

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
   * @throws {RequiredError}
   * @memberof StddevApi
   */
  public create(adAnalyticsStddevQueryRequest?: AdAnalyticsStddevQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/ads/queries/stddev', {}, adAnalyticsStddevQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
