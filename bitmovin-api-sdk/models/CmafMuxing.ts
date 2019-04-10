import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Fmp4Muxing from './Fmp4Muxing';
import Ignoring from './Ignoring';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class CmafMuxing
 */
export default class CmafMuxing extends Fmp4Muxing {
  constructor(obj: any) {
    super(obj);
    this.framesPerCmafChunk = map(obj.framesPerCmafChunk);
  }

  /**
   * Number of media frames per CMAF chunk. Defaults to: Length of a segment in frames. Minimum: 1. Maximum: Length of a segment in frames.
   * @type {any}
   * @memberof CmafMuxing
   */
  public framesPerCmafChunk?: any;
}
