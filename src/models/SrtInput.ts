import {map, mapArray} from '../common/Mapper';
import BackupSrtInputs from './BackupSrtInputs';
import Input from './Input';
import InputType from './InputType';
import SrtMode from './SrtMode';

/**
 * @export
 * @class SrtInput
 */
export class SrtInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof SrtInput
   */
  public readonly type: InputType = InputType.SRT;

  /**
   * The SRT mode to use (required)
   * @type {SrtMode}
   * @memberof SrtInput
   */
  public mode?: SrtMode;

  /**
   * The name or IP of the host providing the SRT stream (only used in CALLER mode)
   * @type {string}
   * @memberof SrtInput
   */
  public host?: string;

  /**
   * The port to connect to or listen on. Has to be one of [2088, 2089, 2090, 2091] when using LISTENER mode. (required)
   * @type {number}
   * @memberof SrtInput
   */
  public port?: number;

  /**
   * The path parameter of the SRT stream
   * @type {string}
   * @memberof SrtInput
   */
  public path?: string;

  /**
   * The maximum accepted transmission latency in milliseconds (when both parties set different values, the maximum of the two is used for both)
   * @type {number}
   * @memberof SrtInput
   */
  public latency?: number;

  /**
   * The passphrase used to secure the SRT stream. For AES-128 encryption, you must enter a 16-character passphrase; for AES-256, you must enter a 32-character passphrase
   * @type {string}
   * @memberof SrtInput
   */
  public passphrase?: string;

  /**
   * The type of AES encryption determines the length of the key (passphrase). AES-128 uses a 16-character (128-bit) passphrase, and AES-256 uses a 32-character (256-bit) passphrase.
   * @type {number}
   * @memberof SrtInput
   */
  public keyLength?: number;

  /**
   * @type {BackupSrtInputs}
   * @memberof SrtInput
   */
  public backupSrtInputs?: BackupSrtInputs;

  constructor(obj?: Partial<SrtInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.mode = map(obj.mode);
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.path = map(obj.path);
    this.latency = map(obj.latency);
    this.passphrase = map(obj.passphrase);
    this.keyLength = map(obj.keyLength);
    this.backupSrtInputs = map(obj.backupSrtInputs, BackupSrtInputs);
  }
}

export default SrtInput;

