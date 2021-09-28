import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<AnalyticsVirtualLicenseRequest>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.timezone = map(obj.timezone);
    this.licenses = mapArray(obj.licenses, AnalyticsVirtualLicenseLicensesListItem);
  }
}

export default AnalyticsVirtualLicenseRequest;

