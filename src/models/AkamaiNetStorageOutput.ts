import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';

/**
 * @export
 * @class AkamaiNetStorageOutput
 */
export class AkamaiNetStorageOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public type: 'AKAMAI_NETSTORAGE' = 'AKAMAI_NETSTORAGE';

  /**
   * Host to use for Akamai NetStorage transfers (required)
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public host?: string;

  /**
   * Your Akamai NetStorage Username (required)
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public username?: string;

  /**
   * Your Akamai NetStorage password (required)
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public password?: string;

  constructor(obj: Partial<AkamaiNetStorageOutput>) {
    super(obj);

    this.host = obj.host;
    this.username = obj.username;
    this.password = obj.password;
  }
}

export default AkamaiNetStorageOutput;

