import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class HttpsInput
 */
export class HttpsInput extends Input {
  /**
   * Host Url or IP of the HTTP server (required)
   * @type {string}
   * @memberof HttpsInput
   */
  public host: string;

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
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.port = map(obj.port);
  }
}

export default HttpsInput;

