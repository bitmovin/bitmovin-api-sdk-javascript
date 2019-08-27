import {map} from '../common/Mapper';
import FileInputStreamType from './FileInputStreamType';
import InputStream from './InputStream';

/**
 * @export
 * @class FileInputStream
 */
export class FileInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof FileInputStream
   */
  public type: 'FILE' = 'FILE';

  /**
   * Id of input (required)
   * @type {string}
   * @memberof FileInputStream
   */
  public inputId?: string;

  /**
   * Path to file (required)
   * @type {string}
   * @memberof FileInputStream
   */
  public inputPath?: string;

  /**
   * @type {FileInputStreamType}
   * @memberof FileInputStream
   */
  public fileType?: FileInputStreamType;

  constructor(obj: Partial<FileInputStream>) {
    super(obj);

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
    this.fileType = obj.fileType;
  }
}

export default FileInputStream;

