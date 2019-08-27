import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class SegmentedRawMuxing
 */
export class SegmentedRawMuxing extends Muxing {
  /**
   * Length of the fragments in seconds (required)
   * @type {number}
   * @memberof SegmentedRawMuxing
   */
  public segmentLength?: number;

  /**
   * Segment naming policy (required)
   * @type {string}
   * @memberof SegmentedRawMuxing
   */
  public segmentNaming?: string;

  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof SegmentedRawMuxing
   */
  public segmentsMuxed?: number;

  constructor(obj: Partial<SegmentedRawMuxing>) {
    super(obj);

    this.segmentLength = obj.segmentLength;
    this.segmentNaming = obj.segmentNaming;
    this.segmentsMuxed = obj.segmentsMuxed;
  }
}

export default SegmentedRawMuxing;

