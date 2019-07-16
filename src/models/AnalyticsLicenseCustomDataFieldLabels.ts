import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsLicenseCustomDataFieldLabels
 */
export class AnalyticsLicenseCustomDataFieldLabels {
  /**
   * Custom Data 1
   * @type {string}
   * @memberof AnalyticsLicenseCustomDataFieldLabels
   */
  public customData1?: string;

  /**
   * Custom Data 2
   * @type {string}
   * @memberof AnalyticsLicenseCustomDataFieldLabels
   */
  public customData2?: string;

  /**
   * Custom Data 3
   * @type {string}
   * @memberof AnalyticsLicenseCustomDataFieldLabels
   */
  public customData3?: string;

  /**
   * Custom Data 4
   * @type {string}
   * @memberof AnalyticsLicenseCustomDataFieldLabels
   */
  public customData4?: string;

  /**
   * Custom Data 5
   * @type {string}
   * @memberof AnalyticsLicenseCustomDataFieldLabels
   */
  public customData5?: string;

  constructor(obj: Partial<AnalyticsLicenseCustomDataFieldLabels>) {
    this.customData1 = map(obj.customData1);
    this.customData2 = map(obj.customData2);
    this.customData3 = map(obj.customData3);
    this.customData4 = map(obj.customData4);
    this.customData5 = map(obj.customData5);
  }
}

export default AnalyticsLicenseCustomDataFieldLabels;

