import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsLicenseKey
 */
export class AnalyticsLicenseKey {
  /**
   * Analytics License Key (required)
   * @type {string}
   * @memberof AnalyticsLicenseKey
   */
  public licenseKey: string;

  constructor(obj: Partial<AnalyticsLicenseKey>) {
    this.licenseKey = map(obj.licenseKey);
  }
}

export default AnalyticsLicenseKey;

