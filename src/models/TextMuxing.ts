import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class TextMuxing
 */
export class TextMuxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.filename = map(obj.filename);
  }

  /**
   * The output file name (required)
   * @type {string}
   * @memberof TextMuxing
   */
  public filename: string;
}

export default TextMuxing;

