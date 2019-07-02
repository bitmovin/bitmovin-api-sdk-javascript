import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import TransferVersion from './TransferVersion';

/**
 * @export
 * @class FtpOutput
 */
export class FtpOutput extends Output {
  constructor(obj: any) {
    super(obj);
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.passive = map(obj.passive);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.transferVersion = map(obj.transferVersion);
    this.maxConcurrentConnections = map(obj.maxConcurrentConnections);
  }

  /**
   * Host URL or IP of the FTP server (required)
   * @type {string}
   * @memberof FtpOutput
   */
  public host: string;
  /**
   * Port to use, standard for FTP: 21
   * @type {number}
   * @memberof FtpOutput
   */
  public port?: number;
  /**
   * Use passive mode. Default is true.
   * @type {boolean}
   * @memberof FtpOutput
   */
  public passive?: boolean;
  /**
   * Your FTP Username
   * @type {string}
   * @memberof FtpOutput
   */
  public username?: string;
  /**
   * Your FTP password
   * @type {string}
   * @memberof FtpOutput
   */
  public password?: string;
  /**
   * Controls which transfer version should be used
   * @type {TransferVersion}
   * @memberof FtpOutput
   */
  public transferVersion?: TransferVersion;
  /**
   * Restrict maximum concurrent connections. Requires at least version 1.1.0.
   * @type {number}
   * @memberof FtpOutput
   */
  public maxConcurrentConnections?: number;
}

export default FtpOutput;

