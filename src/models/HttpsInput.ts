import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class HttpsInput
 */
export class HttpsInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof HttpsInput
   */
  public type: 'HTTPS' = 'HTTPS';

  /**
   * Host Url or IP of the HTTP server (required)
   * @type {string}
   * @memberof HttpsInput
   */
  public host?: string;

  /**
   * Basic Auth Username, if required
   * @type {string}
   * @memberof HttpsInput
   */
  public username?: string;

  /**
   * Basic Auth Password, if required
   * @type {string}
   * @memberof HttpsInput
   */
  public password?: string;

  /**
   * Custom Port
   * @type {number}
   * @memberof HttpsInput
   */
  public port?: number;

  constructor(obj: Partial<HttpsInput>) {
    super(obj);

    this.host = obj.host;
    this.username = obj.username;
    this.password = obj.password;
    this.port = obj.port;
  }
}

export default HttpsInput;

