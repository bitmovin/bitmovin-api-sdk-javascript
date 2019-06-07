import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CaptionCharacterEncoding from './CaptionCharacterEncoding';
import InputPath from './InputPath';

/**
 * @export
 * @class BurnInSubtitleSrt
 */
export class BurnInSubtitleSrt extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.characterEncoding = map(obj.characterEncoding);
    this.input = map<InputPath>(obj.input, InputPath);
  }

  /**
   * Character encoding of the SRT file
   * @type {CaptionCharacterEncoding}
   * @memberof BurnInSubtitleSrt
   */
  public characterEncoding: CaptionCharacterEncoding;
  /**
   * The input location to get the SRT file from
   * @type {InputPath}
   * @memberof BurnInSubtitleSrt
   */
  public input: InputPath;
}

export default BurnInSubtitleSrt;

