import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

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
  public readonly type: InputType = InputType.AKAMAI_NETSTORAGE;

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

  constructor(obj?: Partial<AkamaiNetStorageInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
  }
}

export default AkamaiNetStorageInput;

