import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class AsperaInput
 */
export class AsperaInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof AsperaInput
   */
  public type: InputType.ASPERA = InputType.ASPERA;

  /**
   * Minimal download bandwidth. Examples: 100k, 100m, 100g
   * @type {string}
   * @memberof AsperaInput
   */
  public minBandwidth?: string;

  /**
   * Maximal download bandwidth. Examples: 100k, 100m, 100g
   * @type {string}
   * @memberof AsperaInput
   */
  public maxBandwidth?: string;

  /**
   * Host to use for Aspera transfers (required)
   * @type {string}
   * @memberof AsperaInput
   */
  public host?: string;

  /**
   * Username to log into Aspera host (either password and user must be set or token)
   * @type {string}
   * @memberof AsperaInput
   */
  public username?: string;

  /**
   * corresponding password (either password and user must be set or token)
   * @type {string}
   * @memberof AsperaInput
   */
  public password?: string;

  /**
   * Token used for authentication (either password and user must be set or token)
   * @type {string}
   * @memberof AsperaInput
   */
  public token?: string;

  /**
   * Set the TCP port to be used for fasp session initiation
   * @type {number}
   * @memberof AsperaInput
   */
  public sshPort?: number;

  /**
   * Set the UDP port to be used by fasp for data transfer
   * @type {number}
   * @memberof AsperaInput
   */
  public faspPort?: number;

  constructor(obj?: Partial<AsperaInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.minBandwidth = map(obj.minBandwidth);
    this.maxBandwidth = map(obj.maxBandwidth);
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.token = map(obj.token);
    this.sshPort = map(obj.sshPort);
    this.faspPort = map(obj.faspPort);
  }
}

export default AsperaInput;

