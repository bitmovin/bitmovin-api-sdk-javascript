import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class Mp3Muxing
 */
export class Mp3Muxing extends Muxing {
  /**
   * Name of the new file (required)
   * @type {string}
   * @memberof Mp3Muxing
   */
  public filename: string;

  constructor(obj: Partial<Mp3Muxing>) {
    super(obj);
    this.filename = map(obj.filename);
  }
}

export default Mp3Muxing;

