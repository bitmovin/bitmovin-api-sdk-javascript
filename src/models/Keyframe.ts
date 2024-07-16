import {map, mapArray} from '../common/Mapper';
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
  public time?: number;

  constructor(obj?: Partial<Keyframe>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.time = map(obj.time);
  }
}

export default Keyframe;

