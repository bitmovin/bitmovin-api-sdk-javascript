import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class ZixiInput
 */
export class ZixiInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof ZixiInput
   */
  public type: 'ZIXI' = 'ZIXI';

  /**
   * @type {string}
   * @memberof ZixiInput
   */
  public host?: string;

  /**
   * @type {number}
   * @memberof ZixiInput
   */
  public port?: number;

  /**
   * @type {string}
   * @memberof ZixiInput
   */
  public stream?: string;

  /**
   * @type {string}
   * @memberof ZixiInput
   */
  public password?: string;

  /**
   * @type {number}
   * @memberof ZixiInput
   */
  public latency?: number;

  /**
   * @type {number}
   * @memberof ZixiInput
   */
  public minBitrate?: number;

  /**
   * @type {string}
   * @memberof ZixiInput
   */
  public decryptionType?: string;

  /**
   * @type {string}
   * @memberof ZixiInput
   */
  public decryptionKey?: string;

  constructor(obj: Partial<ZixiInput>) {
    super(obj);

    this.host = obj.host;
    this.port = obj.port;
    this.stream = obj.stream;
    this.password = obj.password;
    this.latency = obj.latency;
    this.minBitrate = obj.minBitrate;
    this.decryptionType = obj.decryptionType;
    this.decryptionKey = obj.decryptionKey;
  }
}

export default ZixiInput;

