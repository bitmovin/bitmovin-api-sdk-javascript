import {map} from '../common/Mapper';
import Filter from './Filter';
import ScalingAlgorithm from './ScalingAlgorithm';

/**
 * @export
 * @class ScaleFilter
 */
export default class ScaleFilter extends Filter {
  constructor(obj: any) {
    super(obj);
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.scalingAlgorithm = map(obj.scalingAlgorithm);
    this.sampleAspectRatioNumerator = map(obj.sampleAspectRatioNumerator);
    this.sampleAspectRatioDenominator = map(obj.sampleAspectRatioDenominator);
  }

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
}
