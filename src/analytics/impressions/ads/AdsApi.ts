import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsAdsImpressionsResponse from '../../../models/AnalyticsAdsImpressionsResponse';
import AnalyticsLicenseKey from '../../../models/AnalyticsLicenseKey';

/**
 * AdsApi - object-oriented interface
 * @export
 * @class AdsApi
 * @extends {BaseAPI}
 */
export default class AdsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Ads Impressions
   * @param {string} impressionId Impression id
   * @param {AnalyticsLicenseKey} analyticsLicenseKey Analytics license
   * @throws {BitmovinError}
   * @memberof AdsApi
   */
  public create(impressionId: string, analyticsLicenseKey?: AnalyticsLicenseKey): Promise<AnalyticsAdsImpressionsResponse> {
    const pathParamMap = {
      impression_id: impressionId
    };
    return this.restClient.post<AnalyticsAdsImpressionsResponse>('/analytics/impressions/{impression_id}/ads', pathParamMap, analyticsLicenseKey).then((response) => {
      return map(response, AnalyticsAdsImpressionsResponse);
    });
  }
}
