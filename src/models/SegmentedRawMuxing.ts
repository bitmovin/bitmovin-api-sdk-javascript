import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<SegmentedRawMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }
}

export default SegmentedRawMuxing;

