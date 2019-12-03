import {map, mapArray} from '../common/Mapper';
import AnalyticsImpressionListItem from './AnalyticsImpressionListItem';

/**
 * @export
 * @class AnalyticsImpressionsResponse
 */
export class AnalyticsImpressionsResponse {
  /**
   * @type {AnalyticsImpressionListItem[]}
   * @memberof AnalyticsImpressionsResponse
   */
  public impressions?: AnalyticsImpressionListItem[];

  constructor(obj?: Partial<AnalyticsImpressionsResponse>) {
    if(!obj) {
      return;
    }
    this.impressions = mapArray(obj.impressions, AnalyticsImpressionListItem);
  }
}

export default AnalyticsImpressionsResponse;

