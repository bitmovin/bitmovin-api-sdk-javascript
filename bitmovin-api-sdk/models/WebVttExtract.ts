import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import InputStream from './InputStream';

/**
 * @export
 * @class WebVttExtract
 */
export default class WebVttExtract extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputStream = map<InputStream>(obj.inputStream, InputStream);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
    this.fileName = map(obj.fileName);
  }

  /**
   * The input stream to extract the subtitle from
   * @type {InputStream}
   * @memberof WebVttExtract
   */
  public inputStream: InputStream;
  /**
   * @type {Array<EncodingOutput>}
   * @memberof WebVttExtract
   */
  public outputs: Array<EncodingOutput>;
  /**
   * Name of the captions file
   * @type {string}
   * @memberof WebVttExtract
   */
  public fileName?: string;
}
