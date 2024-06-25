import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ProgressiveWavMuxing
 */
export class ProgressiveWavMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof ProgressiveWavMuxing
   */
  public readonly type: MuxingType = MuxingType.PROGRESSIVE_WAV;

  /**
   * Name of the output file (required)
   * @type {string}
   * @memberof ProgressiveWavMuxing
   */
  public filename?: string;

  constructor(obj?: Partial<ProgressiveWavMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
  }
}

export default ProgressiveWavMuxing;

