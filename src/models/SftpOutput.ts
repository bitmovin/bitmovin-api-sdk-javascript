import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import TransferVersion from './TransferVersion';

/**
 * @export
 * @class SftpOutput
 */
export class SftpOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof SftpOutput
   */
  public type: 'SFTP' = 'SFTP';

  /**
   * Host Url or IP of the SFTP server (required)
   * @type {string}
   * @memberof SftpOutput
   */
  public host?: string;

  /**
   * Port to use, standard for SFTP: 22
   * @type {number}
   * @memberof SftpOutput
   */
  public port?: number;

  /**
   * Use passive mode. Default is true.
   * @type {boolean}
   * @memberof SftpOutput
   */
  public passive?: boolean;

  /**
   * Your SFTP Username
   * @type {string}
   * @memberof SftpOutput
   */
  public username?: string;

  /**
   * Your SFTP password
   * @type {string}
   * @memberof SftpOutput
   */
  public password?: string;

  /**
   * Controls which transfer version should be used
   * @type {TransferVersion}
   * @memberof SftpOutput
   */
  public transferVersion?: TransferVersion;

  /**
   * Restrict maximum concurrent connections. Requires at least version 1.1.0.
   * @type {number}
   * @memberof SftpOutput
   */
  public maxConcurrentConnections?: number;

  constructor(obj: Partial<SftpOutput>) {
    super(obj);

    this.host = obj.host;
    this.port = obj.port;
    this.passive = obj.passive;
    this.username = obj.username;
    this.password = obj.password;
    this.transferVersion = obj.transferVersion;
    this.maxConcurrentConnections = obj.maxConcurrentConnections;
  }
}

export default SftpOutput;

