import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import ErrorsApi from './errors/ErrorsApi';
import AnalyticsImpressionsQuery from '../../models/AnalyticsImpressionsQuery';
import AnalyticsImpressionsResponse from '../../models/AnalyticsImpressionsResponse';

/**
 * ImpressionsApi - object-oriented interface
 * @export
 * @class ImpressionsApi
 * @extends {BaseAPI}
 */
export default class ImpressionsApi extends BaseAPI {
  public errors: ErrorsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.errors = new ErrorsApi(configuration);
  }

  /**
   * @summary List impressions
   * @param {AnalyticsImpressionsQuery} analyticsImpressionsQuery Analytics impressions query object
   * @throws {BitmovinError}
   * @memberof ImpressionsApi
   */
  public getImpressions(analyticsImpressionsQuery?: AnalyticsImpressionsQuery): Promise<AnalyticsImpressionsResponse> {
    return this.restClient.post<AnalyticsImpressionsResponse>('/analytics/impressions', {}, analyticsImpressionsQuery).then((response) => {
      return map(response, AnalyticsImpressionsResponse);
    });
  }
}
