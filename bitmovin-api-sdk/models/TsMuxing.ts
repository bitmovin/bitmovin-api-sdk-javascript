import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class TsMuxing
 */
export default class TsMuxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.startOffset = map(obj.startOffset);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }

  /**
   * Length of the fragments in seconds
   * @type {number}
   * @memberof TsMuxing
   */
  public segmentLength: number;
  /**
   * Segment naming policy
   * @type {string}
   * @memberof TsMuxing
   */
  public segmentNaming?: string;
  /**
   * Segment naming policy with placeholders which will be replaced during the encoding. The result will be saved in segmentNaming. {rand:4} gets replaced with an alphanumeric string of length specified after the colon. Defaults to 32. If this field is set, segmentNaming must not be specified.
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
}
