import {map, mapArray} from '../common/Mapper';
import Filter from './Filter';
import FilterType from './FilterType';

/**
 * @export
 * @class RotateFilter
 */
export class RotateFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof RotateFilter
   */
  public type: FilterType.ROTATE = FilterType.ROTATE;

  /**
   * Rotation of the video in degrees. A positive value will rotate the video clockwise and a negative one counter clockwise. (required)
   * @type {number}
   * @memberof RotateFilter
   */
  public rotation?: number;

  constructor(obj?: Partial<RotateFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.rotation = map(obj.rotation);
  }
}

export default RotateFilter;

