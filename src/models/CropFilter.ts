import {map, mapArray} from '../common/Mapper';
import Filter from './Filter';
import FilterType from './FilterType';
import PositionUnit from './PositionUnit';

/**
 * @export
 * @class CropFilter
 */
export class CropFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof CropFilter
   */
  public readonly type: FilterType = FilterType.CROP;

  /**
   * Amount of pixels that will be cropped of the input video from the left side. Must be zero or a positive value.
   * @type {number}
   * @memberof CropFilter
   */
  public left?: number;

  /**
   * Amount of pixels that will be cropped of the input video from the right side. Must be zero or a positive value.
   * @type {number}
   * @memberof CropFilter
   */
  public right?: number;

  /**
   * Amount of pixels that will be cropped of the input video from the top. Must be zero or a positive value.
   * @type {number}
   * @memberof CropFilter
   */
  public top?: number;

  /**
   * Amount of pixels that will be cropped of the input video from the bottom. Must be zero or a positive value.
   * @type {number}
   * @memberof CropFilter
   */
  public bottom?: number;

  /**
   * @type {PositionUnit}
   * @memberof CropFilter
   */
  public unit?: PositionUnit;

  constructor(obj?: Partial<CropFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.left = map(obj.left);
    this.right = map(obj.right);
    this.top = map(obj.top);
    this.bottom = map(obj.bottom);
    this.unit = map(obj.unit);
  }
}

export default CropFilter;

