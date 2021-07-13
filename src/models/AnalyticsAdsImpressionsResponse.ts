import {map, mapArray} from '../common/Mapper';
import AnalyticsAdsImpressionSample from './AnalyticsAdsImpressionSample';

/**
 * @export
 * @class AnalyticsAdsImpressionsResponse
 */
export class AnalyticsAdsImpressionsResponse {
  /**
   * @type {AnalyticsAdsImpressionSample[]}
   * @memberof AnalyticsAdsImpressionsResponse
   */
  public adsImpressions?: AnalyticsAdsImpressionSample[];

  constructor(obj?: Partial<AnalyticsAdsImpressionsResponse>) {
    if(!obj) {
      return;
    }
    this.adsImpressions = mapArray(obj.adsImpressions, AnalyticsAdsImpressionSample);
  }
}

export default AnalyticsAdsImpressionsResponse;

