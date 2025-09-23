import {map, mapArray} from '../common/Mapper';
import AnalyticsLicenseCustomDataFieldLabels from './AnalyticsLicenseCustomDataFieldLabels';
import AnalyticsLicenseDomain from './AnalyticsLicenseDomain';
import AnalyticsLicenseFeatures from './AnalyticsLicenseFeatures';

/**
 * @export
 * @class AnalyticsLicense
 */
export class AnalyticsLicense {
  /**
   * Id of the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public id?: string;

  /**
   * Creation date of the Analytics License, returned as ISO 8601 date-time format
   * @type {Date}
   * @memberof AnalyticsLicense
   */
  public createdAt?: Date;

  /**
   * User-specific meta data. This can hold anything.
   * @type {{ [key: string]: any; }}
   * @memberof AnalyticsLicense
   */
  public customData?: { [key: string]: any; };

  /**
   * License Key
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public licenseKey?: string;

  /**
   * Name of the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public name?: string;

  /**
   * The industry of the organization associated with the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public industry?: string;

  /**
   * The subindustry of the organization associated with the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public subIndustry?: string;

  /**
   * Whether the Do Not Track request from the browser should be ignored
   * @type {boolean}
   * @memberof AnalyticsLicense
   */
  public ignoreDNT?: boolean;

  /**
   * Number of impressions recorded
   * @type {number}
   * @memberof AnalyticsLicense
   */
  public impressions?: number;

  /**
   * Maximum number of impressions
   * @type {number}
   * @memberof AnalyticsLicense
   */
  public maxImpressions?: number;

  /**
   * The timezone of the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public timeZone?: string;

  /**
   * Retention time of impressions, returned as ISO 8601 duration format: P(n)Y(n)M(n)DT(n)H(n)M(n)S
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public retentionTime?: string;

  /**
   * Retention time for compressed data, returned as ISO 8601 duration format: P(n)Y(n)M(n)DT(n)H(n)M(n)S
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public compressedRetentionTime?: string;

  /**
   * Whitelisted domains
   * @type {AnalyticsLicenseDomain[]}
   * @memberof AnalyticsLicense
   */
  public domains?: AnalyticsLicenseDomain[];

  /**
   * Allowlisted player domains
   * @type {string[]}
   * @memberof AnalyticsLicense
   */
  public playerDomains?: string[];

  /**
   * Whether the data of this license should be included in the industry insights or not
   * @type {boolean}
   * @memberof AnalyticsLicense
   */
  public includeInInsights?: boolean;

  /**
   * Labels for CustomData fields
   * @type {AnalyticsLicenseCustomDataFieldLabels}
   * @memberof AnalyticsLicense
   */
  public customDataFieldLabels?: AnalyticsLicenseCustomDataFieldLabels;

  /**
   * The number of customData fields available
   * @type {number}
   * @memberof AnalyticsLicense
   */
  public customDataFieldsCount?: number;

  /**
   * Order index of license
   * @type {number}
   * @memberof AnalyticsLicense
   */
  public orderIndex?: number;

  /**
   * The rate limit of this license
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public rateLimit?: string;

  /**
   * @type {AnalyticsLicenseFeatures}
   * @memberof AnalyticsLicense
   */
  public features?: AnalyticsLicenseFeatures;

  /**
   * The expiration date of the license if applicable, returned as ISO 8601 date-time format
   * @type {Date}
   * @memberof AnalyticsLicense
   */
  public planExpiredAt?: Date;

  constructor(obj?: Partial<AnalyticsLicense>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.createdAt = map(obj.createdAt, Date);
    this.customData = map(obj.customData);
    this.licenseKey = map(obj.licenseKey);
    this.name = map(obj.name);
    this.industry = map(obj.industry);
    this.subIndustry = map(obj.subIndustry);
    this.ignoreDNT = map(obj.ignoreDNT);
    this.impressions = map(obj.impressions);
    this.maxImpressions = map(obj.maxImpressions);
    this.timeZone = map(obj.timeZone);
    this.retentionTime = map(obj.retentionTime);
    this.compressedRetentionTime = map(obj.compressedRetentionTime);
    this.domains = mapArray(obj.domains, AnalyticsLicenseDomain);
    this.playerDomains = mapArray(obj.playerDomains);
    this.includeInInsights = map(obj.includeInInsights);
    this.customDataFieldLabels = map(obj.customDataFieldLabels, AnalyticsLicenseCustomDataFieldLabels);
    this.customDataFieldsCount = map(obj.customDataFieldsCount);
    this.orderIndex = map(obj.orderIndex);
    this.rateLimit = map(obj.rateLimit);
    this.features = map(obj.features, AnalyticsLicenseFeatures);
    this.planExpiredAt = map(obj.planExpiredAt, Date);
  }
}

export default AnalyticsLicense;

