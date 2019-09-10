import {map, mapArray} from '../common/Mapper';
import AnalyticsLicenseCustomDataFieldLabels from './AnalyticsLicenseCustomDataFieldLabels';
import AnalyticsLicenseDomain from './AnalyticsLicenseDomain';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class AnalyticsLicense
 */
export class AnalyticsLicense extends BitmovinResponse {
  /**
   * Name of the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public name?: string;

  /**
   * License Key
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public licenseKey?: string;

  /**
   * Creation date of the Analytics License in UTC format
   * @type {Date}
   * @memberof AnalyticsLicense
   */
  public createdAt?: Date;

  /**
   * Maximum number of impressions
   * @type {number}
   * @memberof AnalyticsLicense
   */
  public maxImpressions?: number;

  /**
   * Number of impressions recorded
   * @type {number}
   * @memberof AnalyticsLicense
   */
  public impressions?: number;

  /**
   * Whitelisted domains
   * @type {AnalyticsLicenseDomain[]}
   * @memberof AnalyticsLicense
   */
  public domains?: AnalyticsLicenseDomain[];

  /**
   * Whether the Do Not Track request from the browser should be ignored
   * @type {boolean}
   * @memberof AnalyticsLicense
   */
  public ignoreDNT?: boolean;

  /**
   * The timezone of the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public timeZone?: string;

  /**
   * Labels for CustomData fields
   * @type {AnalyticsLicenseCustomDataFieldLabels}
   * @memberof AnalyticsLicense
   */
  public customDataFieldLabels?: AnalyticsLicenseCustomDataFieldLabels;

  constructor(obj?: Partial<AnalyticsLicense>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.licenseKey = map(obj.licenseKey);
    this.createdAt = map(obj.createdAt, Date);
    this.maxImpressions = map(obj.maxImpressions);
    this.impressions = map(obj.impressions);
    this.domains = mapArray(obj.domains, AnalyticsLicenseDomain);
    this.ignoreDNT = map(obj.ignoreDNT);
    this.timeZone = map(obj.timeZone);
    this.customDataFieldLabels = map(obj.customDataFieldLabels, AnalyticsLicenseCustomDataFieldLabels);
  }
}

export default AnalyticsLicense;

