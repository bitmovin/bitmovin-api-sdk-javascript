import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CaptionCharacterEncoding from './CaptionCharacterEncoding';
import InputPath from './InputPath';

/**
 * @export
 * @class BurnInSubtitleAssa
 */
export class BurnInSubtitleAssa extends BitmovinResource {
  /**
   * Character encoding of the ASSA file (required)
   * @type {CaptionCharacterEncoding}
   * @memberof BurnInSubtitleAssa
   */
  public characterEncoding?: CaptionCharacterEncoding;

  /**
   * The input location to get the ASSA file from (required)
   * @type {InputPath}
   * @memberof BurnInSubtitleAssa
   */
  public input?: InputPath;

  constructor(obj?: Partial<BurnInSubtitleAssa>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.characterEncoding = map(obj.characterEncoding);
    this.input = map(obj.input, InputPath);
  }
}

export default BurnInSubtitleAssa;

