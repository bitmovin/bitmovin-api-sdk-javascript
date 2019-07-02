import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import Domain from './Domain';

/**
 * @export
 * @class PlayerLicense
 */
export class PlayerLicense extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.name = map(obj.name);
    this.createdAt = map(obj.createdAt, Date);
    this.licenseKey = map(obj.licenseKey);
    this.impressions = map(obj.impressions);
    this.maxImpressions = map(obj.maxImpressions);
    this.thirdPartyLicensingEnabled = map(obj.thirdPartyLicensingEnabled);
    this.domains = map<Domain>(obj.domains, Domain);
    this.analyticsKey = map(obj.analyticsKey);
  }

  /**
   * Name of the resource (required)
   * @type {string}
   * @memberof PlayerLicense
   */
  public name: string;
  /**
   * Creation timestamp formatted in UTC: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof PlayerLicense
   */
  public createdAt?: Date;
  /**
   * License Key (required)
   * @type {string}
   * @memberof PlayerLicense
   */
  public licenseKey?: string;
  /**
   * Number of impressions recorded (required)
   * @type {number}
   * @memberof PlayerLicense
   */
  public impressions?: number;
  /**
   * Maximum number of impressions (required)
   * @type {number}
   * @memberof PlayerLicense
   */
  public maxImpressions?: number;
  /**
   * Flag if third party licensing is enabled (required)
   * @type {boolean}
   * @memberof PlayerLicense
   */
  public thirdPartyLicensingEnabled?: boolean;
  /**
   * Whitelisted domains (required)
   * @type {Array<Domain>}
   * @memberof PlayerLicense
   */
  public domains?: Array<Domain>;
  /**
   * Analytics License Key
   * @type {string}
   * @memberof PlayerLicense
   */
  public analyticsKey?: string;
}

export default PlayerLicense;

