import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import InternalChunkLength from './InternalChunkLength';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ProgressiveWebmMuxing
 */
export class ProgressiveWebmMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof ProgressiveWebmMuxing
   */
  public type: 'PROGRESSIVE_WEBM' = 'PROGRESSIVE_WEBM';

  /**
   * Name of the new Video
   * @type {string}
   * @memberof ProgressiveWebmMuxing
   */
  public filename?: string;

  /**
   * Modifies the internal chunk length used for chunked encoding
   * @type {InternalChunkLength}
   * @memberof ProgressiveWebmMuxing
   */
  public internalChunkLength?: InternalChunkLength;

  constructor(obj: Partial<ProgressiveWebmMuxing>) {
    super(obj);

    this.filename = obj.filename;
    this.internalChunkLength = map<InternalChunkLength>(obj.internalChunkLength, InternalChunkLength);
  }
}

export default ProgressiveWebmMuxing;

