import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class PackedAudioMuxing
 */
export class PackedAudioMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof PackedAudioMuxing
   */
  public readonly type: MuxingType = MuxingType.PACKED_AUDIO;

  /**
   * Duration of a segment, given in seconds (required)
   * @type {number}
   * @memberof PackedAudioMuxing
   */
  public segmentLength?: number;

  /**
   * Segment naming policy. The required filename extension depends on the codec (e.g. '.aac' for AAC). Either this or *segmentNamingTemplate* must be set.
   * @type {string}
   * @memberof PackedAudioMuxing
   */
  public segmentNaming?: string;

  /**
   * Segment naming policy containing a placeholder of the format '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32) on each (re)start of the encoding. The resulting string will be copied to the segmentNaming property. Intended to avoid re-use of segment names after restarting a live encoding. Either this or *segmentNaming* must be set. The required filename extension depends on the codec (e.g. '.aac' for AAC).
   * @type {string}
   * @memberof PackedAudioMuxing
   */
  public segmentNamingTemplate?: string;

  /**
   * Offset of MPEG-TS timestamps in seconds. E.g., first packet will start with PTS 900,000 for a 10 seconds offset (90,000 MPEG-TS timescale).
   * @type {number}
   * @memberof PackedAudioMuxing
   */
  public startOffset?: number;

  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof PackedAudioMuxing
   */
  public segmentsMuxed?: number;

  constructor(obj?: Partial<PackedAudioMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.startOffset = map(obj.startOffset);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }
}

export default PackedAudioMuxing;

