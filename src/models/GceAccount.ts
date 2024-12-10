import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * GCE Cloud Connect Account. Configure either by passing a single service account credentials JSON string or by passing the service account email, private key and project ID individually. 
 * @export
 * @class GceAccount
 */
export class GceAccount extends BitmovinResource {
  /**
   * GCP service account credentials JSON
   * @type {string}
   * @memberof GceAccount
   */
  public serviceAccountCredentials?: string;

  /**
   * Email address of the Google service account that will be used to spin up VMs
   * @type {string}
   * @memberof GceAccount
   */
  public serviceAccountEmail?: string;

  /**
   * Google private key of the Google service account that will be used to spin up VMs
   * @type {string}
   * @memberof GceAccount
   */
  public privateKey?: string;

  /**
   * ID of the GCP project in which the VMs are supposed to run.
   * @type {string}
   * @memberof GceAccount
   */
  public projectId?: string;

  constructor(obj?: Partial<GceAccount>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.serviceAccountCredentials = map(obj.serviceAccountCredentials);
    this.serviceAccountEmail = map(obj.serviceAccountEmail);
    this.privateKey = map(obj.privateKey);
    this.projectId = map(obj.projectId);
  }
}

export default GceAccount;

