import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import InputStream from './InputStream';
import OutputFormat from './OutputFormat';

/**
 * @export
 * @class CaptionsCea
 */
export default class CaptionsCea extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.channel = map(obj.channel);
    this.inputStream = map<InputStream>(obj.inputStream, InputStream);
    this.outputFormat = map(obj.outputFormat);
    this.filename = map(obj.filename);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
  }

  /**
   * Select the channel for the caption information
   * @type {number}
   * @memberof CaptionsCea
   */
  public channel?: number;
  /**
   * The input stream to extract the subtitle from
   * @type {InputStream}
   * @memberof CaptionsCea
   */
  public inputStream: InputStream;
  /**
   * @type {OutputFormat}
   * @memberof CaptionsCea
   */
  public outputFormat: OutputFormat;
  /**
   * Name of the captions file
   * @type {string}
   * @memberof CaptionsCea
   */
  public filename?: string;
  /**
   * @type {Array<EncodingOutput>}
   * @memberof CaptionsCea
   */
  public outputs: Array<EncodingOutput>;
}
