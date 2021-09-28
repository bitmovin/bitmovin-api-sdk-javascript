import {map, mapArray} from '../common/Mapper';
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
   * List of Analytics Licenses
   * @type {AnalyticsVirtualLicenseLicensesListItem[]}
   * @memberof AnalyticsVirtualLicense
   */
  public licenses?: AnalyticsVirtualLicenseLicensesListItem[];

  constructor(obj?: Partial<AnalyticsVirtualLicense>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.name = map(obj.name);
    this.timezone = map(obj.timezone);
    this.licenses = mapArray(obj.licenses, AnalyticsVirtualLicenseLicensesListItem);
  }
}

export default AnalyticsVirtualLicense;

