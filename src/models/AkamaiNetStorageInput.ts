import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class AkamaiNetStorageInput
 */
export class AkamaiNetStorageInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof AkamaiNetStorageInput
   */
  public type: 'AKAMAI_NETSTORAGE' = 'AKAMAI_NETSTORAGE';

  /**
   * Host to use for Akamai NetStorage transfers (required)
   * @type {string}
   * @memberof AkamaiNetStorageInput
   */
  public host?: string;

  /**
   * Your Akamai NetStorage Username (required)
   * @type {string}
   * @memberof AkamaiNetStorageInput
   */
  public username?: string;

  /**
   * Your Akamai NetStorage password (required)
   * @type {string}
   * @memberof AkamaiNetStorageInput
   */
  public password?: string;

  constructor(obj: Partial<AkamaiNetStorageInput>) {
    super(obj);

    this.host = obj.host;
    this.username = obj.username;
    this.password = obj.password;
  }
}

export default AkamaiNetStorageInput;

