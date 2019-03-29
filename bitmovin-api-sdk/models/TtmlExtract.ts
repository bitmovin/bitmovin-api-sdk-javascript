import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import InputStream from './InputStream';

/**
 * @export
 * @class TtmlExtract
 */
export default class TtmlExtract extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputStream = map<InputStream>(obj.inputStream, InputStream);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
    this.fileName = map(obj.fileName);
  }

  /**
   * The input stream to extract the subtitle from
   * @type {InputStream}
   * @memberof TtmlExtract
   */
  public inputStream: InputStream;
  /**
   * @type {Array<EncodingOutput>}
   * @memberof TtmlExtract
   */
  public outputs: Array<EncodingOutput>;
  /**
   * Name of the captions file
   * @type {string}
   * @memberof TtmlExtract
   */
  public fileName?: string;
}
