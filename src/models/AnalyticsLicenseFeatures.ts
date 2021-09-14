import {map, mapArray} from '../common/Mapper';
import AnalyticsLicenseErrorDetailsConfig from './AnalyticsLicenseErrorDetailsConfig';

/**
 * @export
 * @class AnalyticsLicenseFeatures
 */
export class AnalyticsLicenseFeatures {
  /**
   * @type {AnalyticsLicenseErrorDetailsConfig}
   * @memberof AnalyticsLicenseFeatures
   */
  public errorDetails?: AnalyticsLicenseErrorDetailsConfig;

  constructor(obj?: Partial<AnalyticsLicenseFeatures>) {
    if(!obj) {
      return;
    }
    this.errorDetails = map(obj.errorDetails, AnalyticsLicenseErrorDetailsConfig);
  }
}

export default AnalyticsLicenseFeatures;

