import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsImpressionListItem
 */
export class AnalyticsImpressionListItem {
  /**
   * Impression ID (required)
   * @type {string}
   * @memberof AnalyticsImpressionListItem
   */
  public impressionId?: string;

  constructor(obj?: Partial<AnalyticsImpressionListItem>) {
    if(!obj) {
      return;
    }
    this.impressionId = map(obj.impressionId);
  }
}

export default AnalyticsImpressionListItem;

