import {map, mapArray} from '../common/Mapper';
import AnalyticsLicenseCustomDataFieldLabels from './AnalyticsLicenseCustomDataFieldLabels';
import AnalyticsVirtualLicenseLicensesListItem from './AnalyticsVirtualLicenseLicensesListItem';

/**
 * @export
 * @class AnalyticsVirtualLicenseRequest
 */
export class AnalyticsVirtualLicenseRequest {
  /**
   * Name of the Analytics Virtual License (required)
   * @type {string}
   * @memberof AnalyticsVirtualLicenseRequest
   */
  public name?: string;

  /**
   * The timezone of the Analytics Virtual License (required)
   * @type {string}
   * @memberof AnalyticsVirtualLicenseRequest
   */
  public timezone?: string;

  /**
   * List of Analytics Licenses (required)
   * @type {AnalyticsVirtualLicenseLicensesListItem[]}
   * @memberof AnalyticsVirtualLicenseRequest
   */
  public licenses?: AnalyticsVirtualLicenseLicensesListItem[];

  /**
   * Labels for Custom Data fields
   * @type {AnalyticsLicenseCustomDataFieldLabels}
   * @memberof AnalyticsVirtualLicenseRequest
   */
  public customDataFieldLabels?: AnalyticsLicenseCustomDataFieldLabels;

  constructor(obj?: Partial<AnalyticsVirtualLicenseRequest>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.timezone = map(obj.timezone);
    this.licenses = mapArray(obj.licenses, AnalyticsVirtualLicenseLicensesListItem);
    this.customDataFieldLabels = map(obj.customDataFieldLabels, AnalyticsLicenseCustomDataFieldLabels);
  }
}

export default AnalyticsVirtualLicenseRequest;

