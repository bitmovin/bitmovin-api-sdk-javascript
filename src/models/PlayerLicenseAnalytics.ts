import {map} from '../common/Mapper';

/**
 * @export
 * @class PlayerLicenseAnalytics
 */
export class PlayerLicenseAnalytics {
  constructor(obj: any) {
    this.analyticsKey = map(obj.analyticsKey);
  }

  /**
   * Analytics License Key (required)
   * @type {string}
   * @memberof PlayerLicenseAnalytics
   */
  public analyticsKey: string;
}

export default PlayerLicenseAnalytics;

