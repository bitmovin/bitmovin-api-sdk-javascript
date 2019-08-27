import {map} from '../common/Mapper';
import Filter from './Filter';

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
  public type: 'ROTATE' = 'ROTATE';

  /**
   * Rotation of the video in degrees. A positive value will rotate the video clockwise and a negative one counter clockwise. (required)
   * @type {number}
   * @memberof RotateFilter
   */
  public rotation?: number;

  constructor(obj: Partial<RotateFilter>) {
    super(obj);

    this.rotation = obj.rotation;
  }
}

export default RotateFilter;

