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
  /**
   * The output file name (required)
   * @type {string}
   * @memberof TextMuxing
   */
  public filename: string;

  constructor(obj: Partial<TextMuxing>) {
    super(obj);
    this.filename = map(obj.filename);
  }
}

export default TextMuxing;

