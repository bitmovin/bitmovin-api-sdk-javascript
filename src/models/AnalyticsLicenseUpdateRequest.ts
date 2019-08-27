import {map} from '../common/Mapper';
import AnalyticsLicenseCustomDataFieldLabels from './AnalyticsLicenseCustomDataFieldLabels';

/**
 * @export
 * @class AnalyticsLicenseUpdateRequest
 */
export class AnalyticsLicenseUpdateRequest {
  /**
   * @type {string}
   * @memberof AnalyticsLicenseUpdateRequest
   */
  public name?: string;

  /**
   * @type {boolean}
   * @memberof AnalyticsLicenseUpdateRequest
   */
  public ignoreDNT?: boolean;

  /**
   * @type {string}
   * @memberof AnalyticsLicenseUpdateRequest
   */
  public timeZone?: string;

  /**
   * Labels for CustomData fields
   * @type {AnalyticsLicenseCustomDataFieldLabels}
   * @memberof AnalyticsLicenseUpdateRequest
   */
  public customDataFieldLabels?: AnalyticsLicenseCustomDataFieldLabels;

  constructor(obj: Partial<AnalyticsLicenseUpdateRequest>) {

    this.name = obj.name;
    this.ignoreDNT = obj.ignoreDNT;
    this.timeZone = obj.timeZone;
    this.customDataFieldLabels = map<AnalyticsLicenseCustomDataFieldLabels>(obj.customDataFieldLabels, AnalyticsLicenseCustomDataFieldLabels);
  }
}

export default AnalyticsLicenseUpdateRequest;

