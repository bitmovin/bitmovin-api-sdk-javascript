import {map} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsLicenseKey
 */
export default class AnalyticsLicenseKey {
  constructor(obj: any) {
    this.id = map(obj.id);
    this.keyValue = map(obj.keyValue);
  }

  /**
   * @type {string}
   * @memberof AnalyticsLicenseKey
   */
  public id?: string;
  /**
   * @type {string}
   * @memberof AnalyticsLicenseKey
   */
  public keyValue?: string;
}
