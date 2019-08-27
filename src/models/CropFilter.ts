import {map} from '../common/Mapper';
import Filter from './Filter';
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
  public type: 'CROP' = 'CROP';

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

  constructor(obj: Partial<CropFilter>) {
    super(obj);

    this.left = obj.left;
    this.right = obj.right;
    this.top = obj.top;
    this.bottom = obj.bottom;
    this.unit = obj.unit;
  }
}

export default CropFilter;

