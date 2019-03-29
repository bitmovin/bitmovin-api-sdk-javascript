import {map} from '../common/Mapper';
import Filter from './Filter';
import PositionUnit from './PositionUnit';

/**
 * @export
 * @class CropFilter
 */
export default class CropFilter extends Filter {
  constructor(obj: any) {
    super(obj);
    this.left = map(obj.left);
    this.right = map(obj.right);
    this.top = map(obj.top);
    this.bottom = map(obj.bottom);
    this.unit = map(obj.unit);
  }

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
}
