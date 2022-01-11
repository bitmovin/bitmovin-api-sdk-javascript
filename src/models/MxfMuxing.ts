import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class MxfMuxing
 */
export class MxfMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof MxfMuxing
   */
  public readonly type: MuxingType = MuxingType.MXF;

  /**
   * Name of the new file (required)
   * @type {string}
   * @memberof MxfMuxing
   */
  public filename?: string;

  constructor(obj?: Partial<MxfMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
  }
}

export default MxfMuxing;

