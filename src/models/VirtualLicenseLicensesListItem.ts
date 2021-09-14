import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class VirtualLicenseLicensesListItem
 */
export class VirtualLicenseLicensesListItem {
  /**
   * Analytics License Id
   * @type {string}
   * @memberof VirtualLicenseLicensesListItem
   */
  public id?: string;

  /**
   * Analytics License key
   * @type {string}
   * @memberof VirtualLicenseLicensesListItem
   */
  public licenseKey?: string;

  /**
   * Organisation Id of license
   * @type {string}
   * @memberof VirtualLicenseLicensesListItem
   */
  public orgId?: string;

  constructor(obj?: Partial<VirtualLicenseLicensesListItem>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.licenseKey = map(obj.licenseKey);
    this.orgId = map(obj.orgId);
  }
}

export default VirtualLicenseLicensesListItem;

