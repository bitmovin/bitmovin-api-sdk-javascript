import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class TextMuxing
 */
export class TextMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof TextMuxing
   */
  public type: MuxingType.TEXT = MuxingType.TEXT;

  /**
   * The output file name (required)
   * @type {string}
   * @memberof TextMuxing
   */
  public filename?: string;

  constructor(obj?: Partial<TextMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
  }
}

export default TextMuxing;

