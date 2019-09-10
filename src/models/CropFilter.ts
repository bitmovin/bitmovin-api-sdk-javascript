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
  public type: FilterType.CROP = FilterType.CROP;

  /**
   * Amount of pixels which will be cropped of the input video from the left side.
   * @type {number}
   * @memberof CropFilter
   */
  public left?: number;

  /**
   * Amount of pixels which will be cropped of the input video from the right side.
   * @type {number}
   * @memberof CropFilter
   */
  public right?: number;

  /**
   * Amount of pixels which will be cropped of the input video from the top.
   * @type {number}
   * @memberof CropFilter
   */
  public top?: number;

  /**
   * Amount of pixels which will be cropped of the input video from the bottom.
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

