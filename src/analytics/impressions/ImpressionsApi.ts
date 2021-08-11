import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import AdsApi from './ads/AdsApi';
import ErrorsApi from './errors/ErrorsApi';
import AnalyticsImpressionDetails from '../../models/AnalyticsImpressionDetails';
import AnalyticsImpressionsQuery from '../../models/AnalyticsImpressionsQuery';
import AnalyticsImpressionsResponse from '../../models/AnalyticsImpressionsResponse';
import AnalyticsLicenseKey from '../../models/AnalyticsLicenseKey';

/**
 * ImpressionsApi - object-oriented interface
 * @export
 * @class ImpressionsApi
 * @extends {BaseAPI}
 */
export default class ImpressionsApi extends BaseAPI {
  public ads: AdsApi;
  public errors: ErrorsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.ads = new AdsApi(configuration);
    this.errors = new ErrorsApi(configuration);
  }

  /**
   * @summary Impression Details
   * @param {string} impressionId Impression id
   * @param {AnalyticsLicenseKey} analyticsLicenseKey Analytics license
   * @throws {BitmovinError}
   * @memberof ImpressionsApi
   */
  public create(impressionId: string, analyticsLicenseKey?: AnalyticsLicenseKey): Promise<AnalyticsImpressionDetails> {
    const pathParamMap = {
      impression_id: impressionId
    };
    return this.restClient.post<AnalyticsImpressionDetails>('/analytics/impressions/{impression_id}', pathParamMap, analyticsLicenseKey).then((response) => {
      return map(response, AnalyticsImpressionDetails);
    });
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
