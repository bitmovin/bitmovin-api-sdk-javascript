import {map, mapArray} from '../common/Mapper';
import AnalyticsLicenseCustomDataFieldLabels from './AnalyticsLicenseCustomDataFieldLabels';
import AnalyticsVirtualLicenseLicensesListItem from './AnalyticsVirtualLicenseLicensesListItem';

/**
 * @export
 * @class AnalyticsVirtualLicense
 */
export class AnalyticsVirtualLicense {
  /**
   * Analytics Virtual License Key/Id
   * @type {string}
   * @memberof AnalyticsVirtualLicense
   */
  public id?: string;

  /**
   * Name of the Analytics Virtual License
   * @type {string}
   * @memberof AnalyticsVirtualLicense
   */
  public name?: string;

  /**
   * The timezone of the Analytics Virtual License
   * @type {string}
   * @memberof AnalyticsVirtualLicense
   */
  public timezone?: string;

  /**
   * Retention time of impressions, returned as ISO 8601 duration format: P(n)Y(n)M(n)DT(n)H(n)M(n)S
   * @type {string}
   * @memberof AnalyticsVirtualLicense
   */
  public retentionTime?: string;

  /**
   * List of Analytics Licenses
   * @type {AnalyticsVirtualLicenseLicensesListItem[]}
   * @memberof AnalyticsVirtualLicense
   */
  public licenses?: AnalyticsVirtualLicenseLicensesListItem[];

  /**
   * The number of customData fields available
   * @type {number}
   * @memberof AnalyticsVirtualLicense
   */
  public customDataFieldsCount?: number;

  /**
   * Labels for Custom Data fields
   * @type {AnalyticsLicenseCustomDataFieldLabels}
   * @memberof AnalyticsVirtualLicense
   */
  public customDataFieldLabels?: AnalyticsLicenseCustomDataFieldLabels;

  constructor(obj?: Partial<AnalyticsVirtualLicense>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.name = map(obj.name);
    this.timezone = map(obj.timezone);
    this.retentionTime = map(obj.retentionTime);
    this.licenses = mapArray(obj.licenses, AnalyticsVirtualLicenseLicensesListItem);
    this.customDataFieldsCount = map(obj.customDataFieldsCount);
    this.customDataFieldLabels = map(obj.customDataFieldLabels, AnalyticsLicenseCustomDataFieldLabels);
  }
}

export default AnalyticsVirtualLicense;

