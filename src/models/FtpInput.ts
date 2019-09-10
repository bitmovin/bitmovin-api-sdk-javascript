import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class FtpInput
 */
export class FtpInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof FtpInput
   */
  public type: InputType.FTP = InputType.FTP;

  /**
   * Host URL or IP of the FTP server (required)
   * @type {string}
   * @memberof FtpInput
   */
  public host?: string;

  /**
   * Port to use, standard for FTP: 21
   * @type {number}
   * @memberof FtpInput
   */
  public port?: number;

  /**
   * Use passive mode. Default is true.
   * @type {boolean}
   * @memberof FtpInput
   */
  public passive?: boolean;

  /**
   * Your FTP Username
   * @type {string}
   * @memberof FtpInput
   */
  public username?: string;

  /**
   * Your FTP password
   * @type {string}
   * @memberof FtpInput
   */
  public password?: string;

  /**
   * Ensure that connections originate from the declared ftp host. Default is true.
   * @type {boolean}
   * @memberof FtpInput
   */
  public remoteVerificationEnabled?: boolean;

  constructor(obj?: Partial<FtpInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.passive = map(obj.passive);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.remoteVerificationEnabled = map(obj.remoteVerificationEnabled);
  }
}

export default FtpInput;

