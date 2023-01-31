import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ProgressiveMovMuxing
 */
export class ProgressiveMovMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof ProgressiveMovMuxing
   */
  public readonly type: MuxingType = MuxingType.PROGRESSIVE_MOV;

  /**
   * Name of the output file
   * @type {string}
   * @memberof ProgressiveMovMuxing
   */
  public filename?: string;

  constructor(obj?: Partial<ProgressiveMovMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
  }
}

export default ProgressiveMovMuxing;

