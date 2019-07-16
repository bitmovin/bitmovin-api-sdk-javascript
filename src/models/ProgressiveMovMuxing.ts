import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import InternalChunkLength from './InternalChunkLength';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ProgressiveMovMuxing
 */
export class ProgressiveMovMuxing extends Muxing {
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

  constructor(obj: Partial<ProgressiveMovMuxing>) {
    super(obj);
    this.filename = map(obj.filename);
    this.internalChunkLength = map<InternalChunkLength>(obj.internalChunkLength, InternalChunkLength);
  }
}

export default ProgressiveMovMuxing;

