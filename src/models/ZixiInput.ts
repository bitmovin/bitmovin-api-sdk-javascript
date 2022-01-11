import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

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
  public readonly type: InputType = InputType.ZIXI;

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

  constructor(obj?: Partial<ZixiInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.stream = map(obj.stream);
    this.password = map(obj.password);
    this.latency = map(obj.latency);
    this.minBitrate = map(obj.minBitrate);
    this.decryptionType = map(obj.decryptionType);
    this.decryptionKey = map(obj.decryptionKey);
  }
}

export default ZixiInput;

