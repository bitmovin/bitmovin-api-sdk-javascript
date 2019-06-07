import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class FtpInput
 */
export class FtpInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.passive = map(obj.passive);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.remoteVerificationEnabled = map(obj.remoteVerificationEnabled);
  }

  /**
   * Host URL or IP of the FTP server
   * @type {string}
   * @memberof FtpInput
   */
  public host: string;
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
}

export default FtpInput;

