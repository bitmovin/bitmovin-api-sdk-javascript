import {map} from '../common/Mapper';
import Filter from './Filter';

/**
 * @export
 * @class RotateFilter
 */
export class RotateFilter extends Filter {
  constructor(obj: any) {
    super(obj);
    this.rotation = map(obj.rotation);
  }

  /**
   * Rotation of the video in degrees. A positive value will rotate the video clockwise and a negative one counter clockwise.
   * @type {number}
   * @memberof RotateFilter
   */
  public rotation: number;
}

export default RotateFilter;

