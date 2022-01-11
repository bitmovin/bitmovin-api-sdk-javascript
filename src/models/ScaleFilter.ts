import {map, mapArray} from '../common/Mapper';
import Filter from './Filter';
import FilterType from './FilterType';
import ScalingAlgorithm from './ScalingAlgorithm';

/**
 * @export
 * @class ScaleFilter
 */
export class ScaleFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof ScaleFilter
   */
  public readonly type: FilterType = FilterType.SCALE;

  /**
   * The width of the output frame in pixels. If not set it will be based on the configured height by maintaining the original aspect ratio. If height is also not set, the original source dimensions will be applied.
   * @type {number}
   * @memberof ScaleFilter
   */
  public width?: number;

  /**
   * The height of the output frame in pixels. If not set it will be based on the configured width by maintaining the original aspect ratio. If width is also not set, the original source dimensions will be applied.
   * @type {number}
   * @memberof ScaleFilter
   */
  public height?: number;

  /**
   * @type {ScalingAlgorithm}
   * @memberof ScaleFilter
   */
  public scalingAlgorithm?: ScalingAlgorithm;

  /**
   * The numerator of the sample aspect ratio (also known as pixel aspect ratio). Must be set if sampleAspectRatioDenominator is set.
   * @type {number}
   * @memberof ScaleFilter
   */
  public sampleAspectRatioNumerator?: number;

  /**
   * The denominator of the sample aspect ratio (also known as pixel aspect ratio). Must be set if sampleAspectRatioNumerator is set.
   * @type {number}
   * @memberof ScaleFilter
   */
  public sampleAspectRatioDenominator?: number;

  constructor(obj?: Partial<ScaleFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.scalingAlgorithm = map(obj.scalingAlgorithm);
    this.sampleAspectRatioNumerator = map(obj.sampleAspectRatioNumerator);
    this.sampleAspectRatioDenominator = map(obj.sampleAspectRatioDenominator);
  }
}

export default ScaleFilter;

