import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
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
  public type: 'FMP4' = 'FMP4';

  /**
   * Length of the fragments in seconds (required)
   * @type {number}
   * @memberof Fmp4Muxing
   */
  public segmentLength?: number;

  /**
   * Segment naming policy
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public segmentNaming?: string;

  /**
   * Segment naming policy containing a placeholder of the format '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32) on each (re)start of the encoding. The resulting string will be copied to the segmentNaming property. Intended to avoid re-use of segment names after restarting a live encoding. If segmentNamingTemplate is set, segmentNaming must not be set.
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
   * Number of segments which have been encoded
   * @type {number}
   * @memberof Fmp4Muxing
   */
  public segmentsMuxed?: number;

  constructor(obj: Partial<Fmp4Muxing>) {
    super(obj);

    this.segmentLength = obj.segmentLength;
    this.segmentNaming = obj.segmentNaming;
    this.segmentNamingTemplate = obj.segmentNamingTemplate;
    this.initSegmentName = obj.initSegmentName;
    this.initSegmentNameTemplate = obj.initSegmentNameTemplate;
    this.writeDurationPerSample = obj.writeDurationPerSample;
    this.segmentsMuxed = obj.segmentsMuxed;
  }
}

export default Fmp4Muxing;

