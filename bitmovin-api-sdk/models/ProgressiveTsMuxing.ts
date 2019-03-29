import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import InternalChunkLength from './InternalChunkLength';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ProgressiveTsMuxing
 */
export default class ProgressiveTsMuxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.segmentLength = map(obj.segmentLength);
    this.filename = map(obj.filename);
    this.startOffset = map(obj.startOffset);
    this.internalChunkLength = map<InternalChunkLength>(obj.internalChunkLength, InternalChunkLength);
  }

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
   * Offset of MPEG-TS timestamps in seconds. E.g., first packet will start with PTS 900,000 for a 10 seconds offset (90,000 MPEG-TS timescale).
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
}
