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
 * @class ProgressiveTsMuxing
 */
export class ProgressiveTsMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof ProgressiveTsMuxing
   */
  public type: MuxingType.PROGRESSIVE_TS = MuxingType.PROGRESSIVE_TS;

  /**
   * Length of the segments in seconds
   * @type {number}
   * @memberof ProgressiveTsMuxing
   */
  public segmentLength?: number;

  /**
   * Name of the new Video
   * @type {string}
   * @memberof ProgressiveTsMuxing
   */
  public filename?: string;

  /**
   * Offset of MPEG-TS timestamps in seconds. e.g. first packet will start with PTS 900,000 for a 10 seconds offset (90,000 MPEG-TS timescale).
   * @type {number}
   * @memberof ProgressiveTsMuxing
   */
  public startOffset?: number;

  /**
   * Modifies the internal chunk length used for chunked encoding
   * @type {InternalChunkLength}
   * @memberof ProgressiveTsMuxing
   */
  public internalChunkLength?: InternalChunkLength;

  constructor(obj?: Partial<ProgressiveTsMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.filename = map(obj.filename);
    this.startOffset = map(obj.startOffset);
    this.internalChunkLength = map(obj.internalChunkLength, InternalChunkLength);
  }
}

export default ProgressiveTsMuxing;

