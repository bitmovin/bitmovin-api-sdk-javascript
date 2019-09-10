import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PlayerLicenseAnalytics
 */
export class PlayerLicenseAnalytics {
  /**
   * Analytics License Key (required)
   * @type {string}
   * @memberof PlayerLicenseAnalytics
   */
  public analyticsKey?: string;

  constructor(obj?: Partial<PlayerLicenseAnalytics>) {
    if(!obj) {
      return;
    }
    this.analyticsKey = map(obj.analyticsKey);
  }
}

export default PlayerLicenseAnalytics;

