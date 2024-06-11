import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class WebmMuxing
 */
export class WebmMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof WebmMuxing
   */
  public readonly type: MuxingType = MuxingType.WEBM;

  /**
   * Length of the fragments in seconds (required)
   * @type {number}
   * @memberof WebmMuxing
   */
  public segmentLength?: number;

  /**
   * Segment naming policy
   * @type {string}
   * @memberof WebmMuxing
   */
  public segmentNaming?: string;

  /**
   * Segment naming policy containing one or both of the following placeholders: - '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32)   on each (re)start of the encoding. The resulting string will be copied to the segmentNaming property.   Intended to avoid re-use of segment names after restarting a live encoding. - '{segment_rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32)   for each different segment. This is intended to avoid guessing segment URLs by replacing segment numbers.  If segmentNamingTemplate is set, segmentNaming must not be set. 
   * @type {string}
   * @memberof WebmMuxing
   */
  public segmentNamingTemplate?: string;

  /**
   * Init segment name
   * @type {string}
   * @memberof WebmMuxing
   */
  public initSegmentName?: string;

  /**
   * Segment naming policy containing a placeholder of the format '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32) on each (re)start of the encoding. The resulting string will be copied to the initSegmentName property. Intended to avoid re-use of segment names after restarting a live encoding. If initSegmentNameTemplate is set, initSegmentName must not be set.
   * @type {string}
   * @memberof WebmMuxing
   */
  public initSegmentNameTemplate?: string;

  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof WebmMuxing
   */
  public segmentsMuxed?: number;

  constructor(obj?: Partial<WebmMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.initSegmentName = map(obj.initSegmentName);
    this.initSegmentNameTemplate = map(obj.initSegmentNameTemplate);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }
}

export default WebmMuxing;

