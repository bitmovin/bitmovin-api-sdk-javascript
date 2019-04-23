import {map} from '../common/Mapper';

/**
 * @export
 * @class PlayerLicenseAnalytics
 */
export default class PlayerLicenseAnalytics {
  constructor(obj: any) {
    this.analyticsKey = map(obj.analyticsKey);
  }

  /**
   * Analytics License Key
   * @type {string}
   * @memberof PlayerLicenseAnalytics
   */
  public analyticsKey: string;
}
