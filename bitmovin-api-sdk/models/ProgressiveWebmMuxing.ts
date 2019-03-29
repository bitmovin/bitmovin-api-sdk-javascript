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
export default class ProgressiveWebmMuxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.filename = map(obj.filename);
    this.internalChunkLength = map<InternalChunkLength>(obj.internalChunkLength, InternalChunkLength);
  }

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
}
