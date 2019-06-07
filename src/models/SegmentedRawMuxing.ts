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
  constructor(obj: any) {
    super(obj);
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }

  /**
   * Length of the fragments in seconds
   * @type {number}
   * @memberof SegmentedRawMuxing
   */
  public segmentLength: number;
  /**
   * Segment naming policy
   * @type {string}
   * @memberof SegmentedRawMuxing
   */
  public segmentNaming: string;
  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof SegmentedRawMuxing
   */
  public segmentsMuxed?: number;
}

export default SegmentedRawMuxing;

