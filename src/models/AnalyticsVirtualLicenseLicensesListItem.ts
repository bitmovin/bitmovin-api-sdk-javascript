import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsVirtualLicenseLicensesListItem
 */
export class AnalyticsVirtualLicenseLicensesListItem {
  /**
   * Analytics License Id
   * @type {string}
   * @memberof AnalyticsVirtualLicenseLicensesListItem
   */
  public id?: string;

  /**
   * Analytics License key
   * @type {string}
   * @memberof AnalyticsVirtualLicenseLicensesListItem
   */
  public licenseKey?: string;

  /**
   * Organisation Id of license
   * @type {string}
   * @memberof AnalyticsVirtualLicenseLicensesListItem
   */
  public orgId?: string;

  /**
   * Analytics License name
   * @type {string}
   * @memberof AnalyticsVirtualLicenseLicensesListItem
   */
  public name?: string;

  constructor(obj?: Partial<AnalyticsVirtualLicenseLicensesListItem>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.licenseKey = map(obj.licenseKey);
    this.orgId = map(obj.orgId);
    this.name = map(obj.name);
  }
}

export default AnalyticsVirtualLicenseLicensesListItem;

