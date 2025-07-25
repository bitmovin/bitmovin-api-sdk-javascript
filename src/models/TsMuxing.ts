import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';
import TsMuxingConfiguration from './TsMuxingConfiguration';

/**
 * @export
 * @class TsMuxing
 */
export class TsMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof TsMuxing
   */
  public readonly type: MuxingType = MuxingType.TS;

  /**
   * Length of the fragments in seconds
   * @type {number}
   * @memberof TsMuxing
   */
  public segmentLength?: number;

  /**
   * Prevents creation of very short final segments (in seconds). If the last segment is shorter than minimumSegmentLength, it will be merged with the previous one, creating a segment of a size up to segmentLength + minimumSegmentLength.
   * @type {number}
   * @memberof TsMuxing
   */
  public minimumSegmentLength?: number;

  /**
   * Segment naming policy
   * @type {string}
   * @memberof TsMuxing
   */
  public segmentNaming?: string;

  /**
   * Segment naming policy containing one or both of the following placeholders: - '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32)   on each (re)start of the encoding. The resulting string will be copied to the segmentNaming property.   Intended to avoid re-use of segment names after restarting a live encoding. - '{segment_rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32)   for each different segment. This is intended to avoid guessing segment URLs by replacing segment numbers.  If segmentNamingTemplate is set, segmentNaming must not be set. 
   * @type {string}
   * @memberof TsMuxing
   */
  public segmentNamingTemplate?: string;

  /**
   * Offset of MPEG-TS timestamps in seconds. E.g., first packet will start with PTS 900,000 for a 10 seconds offset (90,000 MPEG-TS timescale).
   * @type {number}
   * @memberof TsMuxing
   */
  public startOffset?: number;

  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof TsMuxing
   */
  public segmentsMuxed?: number;

  /**
   * Advanced Configuration of the MPEG Transport Stream Parameters
   * @type {TsMuxingConfiguration}
   * @memberof TsMuxing
   */
  public configuration?: TsMuxingConfiguration;

  constructor(obj?: Partial<TsMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.minimumSegmentLength = map(obj.minimumSegmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.startOffset = map(obj.startOffset);
    this.segmentsMuxed = map(obj.segmentsMuxed);
    this.configuration = map(obj.configuration, TsMuxingConfiguration);
  }
}

export default TsMuxing;

