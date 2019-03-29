import {map} from '../common/Mapper';
import AnalyticsLicenseDomain from './AnalyticsLicenseDomain';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AnalyticsLicenseDetails
 */
export default class AnalyticsLicenseDetails extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.licenseKey = map(obj.licenseKey);
    this.maxDatapoints = map(obj.maxDatapoints);
    this.datapoints = map(obj.datapoints);
    this.domains = map<AnalyticsLicenseDomain>(obj.domains, AnalyticsLicenseDomain);
  }

  /**
   * License Key
   * @type {string}
   * @memberof AnalyticsLicenseDetails
   */
  public licenseKey: string;
  /**
   * Maximum number of datapoints
   * @type {number}
   * @memberof AnalyticsLicenseDetails
   */
  public maxDatapoints: number;
  /**
   * Number of datapoints recorded
   * @type {number}
   * @memberof AnalyticsLicenseDetails
   */
  public datapoints: number;
  /**
   * Whitelisted domains
   * @type {Array<AnalyticsLicenseDomain>}
   * @memberof AnalyticsLicenseDetails
   */
  public domains: Array<AnalyticsLicenseDomain>;
}
