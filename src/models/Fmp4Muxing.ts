import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import PTSAlignMode from './PTSAlignMode';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class Fmp4Muxing
 */
export class Fmp4Muxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public readonly type: MuxingType = MuxingType.FMP4;

  /**
   * Length of the fragments in seconds (required)
   * @type {number}
   * @memberof Fmp4Muxing
   */
  public segmentLength?: number;

  /**
   * Prevents creation of very short segments (in seconds). If the last segment is shorter than minimumSegmentLength or there is a custom keyframe too close to a segment boundary, short segments will be omitted by removing segment boundaries, resulting in a segment of a size up to segmentLength + minimumSegmentLength.
   * @type {number}
   * @memberof Fmp4Muxing
   */
  public minimumSegmentLength?: number;

  /**
   * Segment naming policy
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public segmentNaming?: string;

  /**
   * Segment naming policy containing one or both of the following placeholders: - '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32)   on each (re)start of the encoding. The resulting string will be copied to the segmentNaming property.   Intended to avoid re-use of segment names after restarting a live encoding. - '{segment_rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32)   for each different segment. This is intended to avoid guessing segment URLs by replacing segment numbers.  If segmentNamingTemplate is set, segmentNaming must not be set. 
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public segmentNamingTemplate?: string;

  /**
   * Init segment name
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public initSegmentName?: string;

  /**
   * Segment naming policy containing a placeholder of the format '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32) on each (re)start of the encoding. The resulting string will be copied to the initSegmentName property. Intended to avoid re-use of segment names after restarting a live encoding. If initSegmentNameTemplate is set, initSegmentName must not be set.
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public initSegmentNameTemplate?: string;

  /**
   * Writes the duration per sample into the sample entry in the Track Fragment Run Box. This could help to fix playback issues on legacy players. Enabling this flag increases the muxing overhead by 4 bytes per sample/frame.
   * @type {boolean}
   * @memberof Fmp4Muxing
   */
  public writeDurationPerSample?: boolean;

  /**
   * Insert scte35 triggers as emsg boxes into the fMP4 segments.
   * @type {boolean}
   * @memberof Fmp4Muxing
   */
  public signalScte35AsEmsg?: boolean;

  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof Fmp4Muxing
   */
  public segmentsMuxed?: number;

  /**
   * Alignment mode for composition / presentation timestamps (CTS/PTS). Only applies to h.264 and h.265
   * @type {PTSAlignMode}
   * @memberof Fmp4Muxing
   */
  public ptsAlignMode?: PTSAlignMode;

  constructor(obj?: Partial<Fmp4Muxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.minimumSegmentLength = map(obj.minimumSegmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.initSegmentName = map(obj.initSegmentName);
    this.initSegmentNameTemplate = map(obj.initSegmentNameTemplate);
    this.writeDurationPerSample = map(obj.writeDurationPerSample);
    this.signalScte35AsEmsg = map(obj.signalScte35AsEmsg);
    this.segmentsMuxed = map(obj.segmentsMuxed);
    this.ptsAlignMode = map(obj.ptsAlignMode);
  }
}

export default Fmp4Muxing;

