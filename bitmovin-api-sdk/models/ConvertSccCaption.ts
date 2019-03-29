import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import ConvertSccCaptionWebVttSettings from './ConvertSccCaptionWebVttSettings';
import EncodingOutput from './EncodingOutput';
import InputPath from './InputPath';
import StreamCaptionOutputFormat from './StreamCaptionOutputFormat';

/**
 * @export
 * @class ConvertSccCaption
 */
export default class ConvertSccCaption extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.input = map<InputPath>(obj.input, InputPath);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
    this.fileName = map(obj.fileName);
    this.outputFormat = map(obj.outputFormat);
    this.webVttSettings = map<ConvertSccCaptionWebVttSettings>(obj.webVttSettings, ConvertSccCaptionWebVttSettings);
  }

  /**
   * The input location to get the scc file from
   * @type {InputPath}
   * @memberof ConvertSccCaption
   */
  public input: InputPath;
  /**
   * @type {Array<EncodingOutput>}
   * @memberof ConvertSccCaption
   */
  public outputs: Array<EncodingOutput>;
  /**
   * Name of the captions file
   * @type {string}
   * @memberof ConvertSccCaption
   */
  public fileName: string;
  /**
   * @type {StreamCaptionOutputFormat}
   * @memberof ConvertSccCaption
   */
  public outputFormat: StreamCaptionOutputFormat;
  /**
   * Optional settings when converting SCC to WebVTT
   * @type {ConvertSccCaptionWebVttSettings}
   * @memberof ConvertSccCaption
   */
  public webVttSettings?: ConvertSccCaptionWebVttSettings;
}
