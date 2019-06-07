import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import TransferVersion from './TransferVersion';

/**
 * @export
 * @class SftpOutput
 */
export class SftpOutput extends Output {
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
   * Host Url or IP of the SFTP server
   * @type {string}
   * @memberof SftpOutput
   */
  public host: string;
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
}

export default SftpOutput;

