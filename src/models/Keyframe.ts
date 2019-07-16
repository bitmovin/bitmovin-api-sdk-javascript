import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Keyframe
 */
export class Keyframe extends BitmovinResource {
  /**
   * Time in seconds where the keyframe should be inserted (required)
   * @type {number}
   * @memberof Keyframe
   */
  public time: number;

  /**
   * Instructs the encoder to cut the segment at this position
   * @type {boolean}
   * @memberof Keyframe
   */
  public segmentCut?: boolean;

  constructor(obj: Partial<Keyframe>) {
    super(obj);
    this.time = map(obj.time);
    this.segmentCut = map(obj.segmentCut);
  }
}

export default Keyframe;

