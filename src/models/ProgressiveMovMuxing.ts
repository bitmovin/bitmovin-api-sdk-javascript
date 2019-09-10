import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import InternalChunkLength from './InternalChunkLength';
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
  public type: MuxingType.PROGRESSIVE_MOV = MuxingType.PROGRESSIVE_MOV;

  /**
   * The output file name
   * @type {string}
   * @memberof ProgressiveMovMuxing
   */
  public filename?: string;

  /**
   * Modifies the internal chunk length used for chunked encoding
   * @type {InternalChunkLength}
   * @memberof ProgressiveMovMuxing
   */
  public internalChunkLength?: InternalChunkLength;

  constructor(obj?: Partial<ProgressiveMovMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
    this.internalChunkLength = map(obj.internalChunkLength, InternalChunkLength);
  }
}

export default ProgressiveMovMuxing;

