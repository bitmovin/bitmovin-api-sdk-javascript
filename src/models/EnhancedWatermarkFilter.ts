import {map} from '../common/Mapper';
import Filter from './Filter';
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
  public type: 'ENHANCED_WATERMARK' = 'ENHANCED_WATERMARK';

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

  constructor(obj: Partial<EnhancedWatermarkFilter>) {
    super(obj);

    this.image = obj.image;
    this.left = obj.left;
    this.right = obj.right;
    this.top = obj.top;
    this.bottom = obj.bottom;
    this.unit = obj.unit;
    this.opacity = obj.opacity;
  }
}

export default EnhancedWatermarkFilter;

