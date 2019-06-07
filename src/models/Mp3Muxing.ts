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
  constructor(obj: any) {
    super(obj);
    this.filename = map(obj.filename);
  }

  /**
   * Name of the new file
   * @type {string}
   * @memberof Mp3Muxing
   */
  public filename: string;
}

export default Mp3Muxing;

