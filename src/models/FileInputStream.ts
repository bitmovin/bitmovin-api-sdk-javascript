import {map} from '../common/Mapper';
import FileInputStreamType from './FileInputStreamType';
import InputStream from './InputStream';

/**
 * @export
 * @class FileInputStream
 */
export class FileInputStream extends InputStream {
  /**
   * Id of input (required)
   * @type {string}
   * @memberof FileInputStream
   */
  public inputId: string;

  /**
   * Path to file (required)
   * @type {string}
   * @memberof FileInputStream
   */
  public inputPath: string;

  /**
   * @type {FileInputStreamType}
   * @memberof FileInputStream
   */
  public fileType: FileInputStreamType;

  constructor(obj: Partial<FileInputStream>) {
    super(obj);
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.fileType = map(obj.fileType);
  }
}

export default FileInputStream;

