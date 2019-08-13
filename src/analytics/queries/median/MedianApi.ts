import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsMedianQueryRequest from '../../../models/AnalyticsMedianQueryRequest';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';
import {getType, map} from '../../../common/Mapper';

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
   * @param {AnalyticsMedianQueryRequest} analyticsMedianQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof MedianApi
   */
  public create(analyticsMedianQueryRequest?: AnalyticsMedianQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/median', {}, analyticsMedianQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
