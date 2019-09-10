import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import OutputType from './OutputType';
import TransferVersion from './TransferVersion';

/**
 * @export
 * @class FtpOutput
 */
export class FtpOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof FtpOutput
   */
  public type: OutputType.FTP = OutputType.FTP;

  /**
   * Host URL or IP of the FTP server (required)
   * @type {string}
   * @memberof FtpOutput
   */
  public host?: string;

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

  constructor(obj?: Partial<FtpOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.passive = map(obj.passive);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.transferVersion = map(obj.transferVersion);
    this.maxConcurrentConnections = map(obj.maxConcurrentConnections);
  }
}

export default FtpOutput;

