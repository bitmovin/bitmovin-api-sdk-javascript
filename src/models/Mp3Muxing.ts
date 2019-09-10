import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class Mp3Muxing
 */
export class Mp3Muxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof Mp3Muxing
   */
  public type: MuxingType.MP3 = MuxingType.MP3;

  /**
   * Name of the new file (required)
   * @type {string}
   * @memberof Mp3Muxing
   */
  public filename?: string;

  constructor(obj?: Partial<Mp3Muxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
  }
}

export default Mp3Muxing;

