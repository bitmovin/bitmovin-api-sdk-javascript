import {map} from '../common/Mapper';
import Filter from './Filter';

/**
 * @export
 * @class RotateFilter
 */
export class RotateFilter extends Filter {
  /**
   * Rotation of the video in degrees. A positive value will rotate the video clockwise and a negative one counter clockwise. (required)
   * @type {number}
   * @memberof RotateFilter
   */
  public rotation: number;

  constructor(obj: Partial<RotateFilter>) {
    super(obj);
    this.rotation = map(obj.rotation);
  }
}

export default RotateFilter;

