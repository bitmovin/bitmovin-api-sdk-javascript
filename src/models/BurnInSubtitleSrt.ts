import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CaptionCharacterEncoding from './CaptionCharacterEncoding';
import InputPath from './InputPath';

/**
 * @export
 * @class BurnInSubtitleSrt
 */
export class BurnInSubtitleSrt extends BitmovinResource {
  /**
   * Character encoding of the SRT file (required)
   * @type {CaptionCharacterEncoding}
   * @memberof BurnInSubtitleSrt
   */
  public characterEncoding?: CaptionCharacterEncoding;

  /**
   * The input location to get the SRT file from (required)
   * @type {InputPath}
   * @memberof BurnInSubtitleSrt
   */
  public input?: InputPath;

  constructor(obj?: Partial<BurnInSubtitleSrt>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.characterEncoding = map(obj.characterEncoding);
    this.input = map(obj.input, InputPath);
  }
}

export default BurnInSubtitleSrt;

