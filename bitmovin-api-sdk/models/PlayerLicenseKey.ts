import {map} from '../common/Mapper';

/**
 * @export
 * @class PlayerLicenseKey
 */
export default class PlayerLicenseKey {
  constructor(obj: any) {
    this.id = map(obj.id);
    this.keyValue = map(obj.keyValue);
  }

  /**
   * @type {string}
   * @memberof PlayerLicenseKey
   */
  public id?: string;
  /**
   * @type {string}
   * @memberof PlayerLicenseKey
   */
  public keyValue?: string;
}
