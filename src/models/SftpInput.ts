import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class SftpInput
 */
export class SftpInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof SftpInput
   */
  public readonly type: InputType = InputType.SFTP;

  /**
   * Host Url or IP of the SFTP server (required)
   * @type {string}
   * @memberof SftpInput
   */
  public host?: string;

  /**
   * Port to use, standard for SFTP: 22
   * @type {number}
   * @memberof SftpInput
   */
  public port?: number;

  /**
   * Use passive mode. Default is true.
   * @type {boolean}
   * @memberof SftpInput
   */
  public passive?: boolean;

  /**
   * Your SFTP Username
   * @type {string}
   * @memberof SftpInput
   */
  public username?: string;

  /**
   * Your SFTP password
   * @type {string}
   * @memberof SftpInput
   */
  public password?: string;

  constructor(obj?: Partial<SftpInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.host = map(obj.host);
    this.port = map(obj.port);
    this.passive = map(obj.passive);
    this.username = map(obj.username);
    this.password = map(obj.password);
  }
}

export default SftpInput;

