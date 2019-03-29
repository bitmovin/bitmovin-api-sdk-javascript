import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Keyframe
 */
export default class Keyframe extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.time = map(obj.time);
    this.segmentCut = map(obj.segmentCut);
  }

  /**
   * Time in seconds where the keyframe should be inserted
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
}
