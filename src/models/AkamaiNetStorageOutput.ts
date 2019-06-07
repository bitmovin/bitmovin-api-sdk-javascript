import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';

/**
 * @export
 * @class AkamaiNetStorageOutput
 */
export class AkamaiNetStorageOutput extends Output {
  constructor(obj: any) {
    super(obj);
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
  }

  /**
   * Host to use for Akamai NetStorage transfers
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public host: string;
  /**
   * Your Akamai NetStorage Username
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public username: string;
  /**
   * Your Akamai NetStorage password
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public password: string;
}

export default AkamaiNetStorageOutput;

