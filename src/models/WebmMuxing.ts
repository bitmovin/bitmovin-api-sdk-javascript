import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class WebmMuxing
 */
export class WebmMuxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.initSegmentName = map(obj.initSegmentName);
    this.initSegmentNameTemplate = map(obj.initSegmentNameTemplate);
  }

  /**
   * Length of the fragments in seconds (required)
   * @type {number}
   * @memberof WebmMuxing
   */
  public segmentLength: number;
  /**
   * Segment naming policy
   * @type {string}
   * @memberof WebmMuxing
   */
  public segmentNaming?: string;
  /**
   * Segment naming policy containing a placeholder of the format '{rand_chars:x}', which will be replaced by a random alphanumeric string of length x (default 32) on each (re)start of the encoding. The resulting string will be copied to the segmentNaming property. Intended to avoid re-use of segment names after restarting a live encoding. If segmentNamingTemplate is set, segmentNaming must not be set.
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
}

export default WebmMuxing;

