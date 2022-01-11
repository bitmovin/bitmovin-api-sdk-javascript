import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

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
  public readonly type: InputType = InputType.HTTPS;

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

  constructor(obj?: Partial<HttpsInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.port = map(obj.port);
  }
}

export default HttpsInput;

