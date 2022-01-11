import {map, mapArray} from '../common/Mapper';
import Filter from './Filter';
import FilterType from './FilterType';
import PositionUnit from './PositionUnit';

/**
 * @export
 * @class EnhancedWatermarkFilter
 */
export class EnhancedWatermarkFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof EnhancedWatermarkFilter
   */
  public readonly type: FilterType = FilterType.ENHANCED_WATERMARK;

  /**
   * URL of the file to be used as watermark image. Supported image formats: PNG, JPEG, BMP, GIF (required)
   * @type {string}
   * @memberof EnhancedWatermarkFilter
   */
  public image?: string;

  /**
   * Distance from the left edge of the input video to the left edge of the watermark image. May not be set if 'right' is set.
   * @type {number}
   * @memberof EnhancedWatermarkFilter
   */
  public left?: number;

  /**
   * Distance from the right edge of the input video to the right edge of the watermark image . May not be set if 'left' is set.
   * @type {number}
   * @memberof EnhancedWatermarkFilter
   */
  public right?: number;

  /**
   * Distance from the top edge of the input video to the top edge of the watermark image. May not be set if 'bottom' is set.
   * @type {number}
   * @memberof EnhancedWatermarkFilter
   */
  public top?: number;

  /**
   * Distance from the bottom edge of the input video to the bottom edge of the watermark image. May not be set if 'top' is set.
   * @type {number}
   * @memberof EnhancedWatermarkFilter
   */
  public bottom?: number;

  /**
   * @type {PositionUnit}
   * @memberof EnhancedWatermarkFilter
   */
  public unit?: PositionUnit;

  /**
   * Opacity to apply on the watermark image. Valid values are from 0.0 (completely transparent) to 1.0 (not transparent at all)
   * @type {number}
   * @memberof EnhancedWatermarkFilter
   */
  public opacity?: number;

  /**
   * Desired width of the watermark image, the unit of the parameter is specified separately by the parameter 'unit'. If both width and height are set the watermark size is fixed. If only one is set the aspect ratio of the image will be used to rescale it
   * @type {number}
   * @memberof EnhancedWatermarkFilter
   */
  public width?: number;

  /**
   * Desired height of the watermark image, the unit of the parameter is specified separately by the parameter 'unit'. If both width and height are set the watermark size is fixed. If only one is set the aspect ratio of the image will be used to rescale it
   * @type {number}
   * @memberof EnhancedWatermarkFilter
   */
  public height?: number;

  constructor(obj?: Partial<EnhancedWatermarkFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.image = map(obj.image);
    this.left = map(obj.left);
    this.right = map(obj.right);
    this.top = map(obj.top);
    this.bottom = map(obj.bottom);
    this.unit = map(obj.unit);
    this.opacity = map(obj.opacity);
    this.width = map(obj.width);
    this.height = map(obj.height);
  }
}

export default EnhancedWatermarkFilter;

