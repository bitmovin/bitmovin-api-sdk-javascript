import {map, mapArray} from '../common/Mapper';
import FileInputStreamType from './FileInputStreamType';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

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
  public type: InputStreamType.FILE = InputStreamType.FILE;

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

  constructor(obj?: Partial<FileInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.fileType = map(obj.fileType);
  }
}

export default FileInputStream;

