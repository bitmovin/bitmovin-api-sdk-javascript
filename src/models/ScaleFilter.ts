import {map} from '../common/Mapper';
import Filter from './Filter';
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
  public type: 'SCALE' = 'SCALE';

  /**
   * The width of the output frame in pixel. If not set: codec configuration width will be used.
   * @type {number}
   * @memberof ScaleFilter
   */
  public width?: number;

  /**
   * The height of the output frame in pixel. If not set: codec configuration height will be used.
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

  constructor(obj: Partial<ScaleFilter>) {
    super(obj);

    this.width = obj.width;
    this.height = obj.height;
    this.scalingAlgorithm = obj.scalingAlgorithm;
    this.sampleAspectRatioNumerator = obj.sampleAspectRatioNumerator;
    this.sampleAspectRatioDenominator = obj.sampleAspectRatioDenominator;
  }
}

export default ScaleFilter;

