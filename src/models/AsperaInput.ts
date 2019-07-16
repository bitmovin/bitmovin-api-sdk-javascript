import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class AsperaInput
 */
export class AsperaInput extends Input {
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
  public host: string;

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

  constructor(obj: Partial<AsperaInput>) {
    super(obj);
    this.minBandwidth = map(obj.minBandwidth);
    this.maxBandwidth = map(obj.maxBandwidth);
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.token = map(obj.token);
  }
}

export default AsperaInput;

