import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class GceAccount
 */
export class GceAccount extends BitmovinResource {
  /**
   * Email address of the Google service account that will be used to spin up VMs (required)
   * @type {string}
   * @memberof GceAccount
   */
  public serviceAccountEmail?: string;

  /**
   * Google private key of the Google service account that will be used to spin up VMs (required)
   * @type {string}
   * @memberof GceAccount
   */
  public privateKey?: string;

  /**
   * ID of the GCP project in which the VMs are supposed to run. (required)
   * @type {string}
   * @memberof GceAccount
   */
  public projectId?: string;

  constructor(obj?: Partial<GceAccount>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.serviceAccountEmail = map(obj.serviceAccountEmail);
    this.privateKey = map(obj.privateKey);
    this.projectId = map(obj.projectId);
  }
}

export default GceAccount;

