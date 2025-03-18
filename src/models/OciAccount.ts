import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class OciAccount
 */
export class OciAccount extends BitmovinResource {
  /**
   * The OCID of the tenancy where you intend to run encoding VMs. (required)
   * @type {string}
   * @memberof OciAccount
   */
  public tenancyId?: string;

  /**
   * The OCID of the compartment within the tenancy where you intend to run encoding VMs. (required)
   * @type {string}
   * @memberof OciAccount
   */
  public compartmentId?: string;

  constructor(obj?: Partial<OciAccount>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.tenancyId = map(obj.tenancyId);
    this.compartmentId = map(obj.compartmentId);
  }
}

export default OciAccount;

