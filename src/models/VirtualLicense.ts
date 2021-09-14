import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import VirtualLicenseLicensesListItem from './VirtualLicenseLicensesListItem';

/**
 * @export
 * @class VirtualLicense
 */
export class VirtualLicense extends BitmovinResponse {
  /**
   * Name of the Virtual License
   * @type {string}
   * @memberof VirtualLicense
   */
  public name?: string;

  /**
   * The timezone of the Virtual License
   * @type {string}
   * @memberof VirtualLicense
   */
  public timezone?: string;

  /**
   * List of Analytics Licenses
   * @type {VirtualLicenseLicensesListItem[]}
   * @memberof VirtualLicense
   */
  public licenses?: VirtualLicenseLicensesListItem[];

  constructor(obj?: Partial<VirtualLicense>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.timezone = map(obj.timezone);
    this.licenses = mapArray(obj.licenses, VirtualLicenseLicensesListItem);
  }
}

export default VirtualLicense;

