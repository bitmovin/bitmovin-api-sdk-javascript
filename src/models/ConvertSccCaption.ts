import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import ConvertSccCaptionWebVttSettings from './ConvertSccCaptionWebVttSettings';
import EncodingOutput from './EncodingOutput';
import InputPath from './InputPath';
import StreamCaptionOutputFormat from './StreamCaptionOutputFormat';

/**
 * @export
 * @class ConvertSccCaption
 */
export class ConvertSccCaption extends BitmovinResource {
  /**
   * The input location to get the scc file from (required)
   * @type {InputPath}
   * @memberof ConvertSccCaption
   */
  public input?: InputPath;

  /**
   * @type {EncodingOutput[]}
   * @memberof ConvertSccCaption
   */
  public outputs?: EncodingOutput[];

  /**
   * Name of the captions file (required)
   * @type {string}
   * @memberof ConvertSccCaption
   */
  public fileName?: string;

  /**
   * @type {StreamCaptionOutputFormat}
   * @memberof ConvertSccCaption
   */
  public outputFormat?: StreamCaptionOutputFormat;

  /**
   * Optional settings when converting SCC to WebVTT
   * @type {ConvertSccCaptionWebVttSettings}
   * @memberof ConvertSccCaption
   */
  public webVttSettings?: ConvertSccCaptionWebVttSettings;

  constructor(obj?: Partial<ConvertSccCaption>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.input = map(obj.input, InputPath);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.fileName = map(obj.fileName);
    this.outputFormat = map(obj.outputFormat);
    this.webVttSettings = map(obj.webVttSettings, ConvertSccCaptionWebVttSettings);
  }
}

export default ConvertSccCaption;

