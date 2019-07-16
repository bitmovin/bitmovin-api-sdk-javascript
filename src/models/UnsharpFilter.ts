import {map} from '../common/Mapper';
import Filter from './Filter';

/**
 * @export
 * @class UnsharpFilter
 */
export class UnsharpFilter extends Filter {
  /**
   * Must be an odd integer between 3 and 23
   * @type {number}
   * @memberof UnsharpFilter
   */
  public lumaMatrixHorizontalSize?: number;

  /**
   * Must be an odd integer between 3 and 23
   * @type {number}
   * @memberof UnsharpFilter
   */
  public lumaMatrixVerticalSize?: number;

  /**
   * Negative value: blur, positive value: sharpen, floating point number, valid value range: -1.5 - 1.5
   * @type {number}
   * @memberof UnsharpFilter
   */
  public lumaEffectStrength?: number;

  /**
   * Must be an odd integer between 3 and 23
   * @type {number}
   * @memberof UnsharpFilter
   */
  public chromaMatrixHorizontalSize?: number;

  /**
   * Must be an odd integer between 3 and 23
   * @type {number}
   * @memberof UnsharpFilter
   */
  public chromaMatrixVerticalSize?: number;

  /**
   * Negative value: blur, positive value: sharpen, floating point number, valid value range: -1.5 - 1.5
   * @type {number}
   * @memberof UnsharpFilter
   */
  public chromaEffectStrength?: number;

  constructor(obj: Partial<UnsharpFilter>) {
    super(obj);
    this.lumaMatrixHorizontalSize = map(obj.lumaMatrixHorizontalSize);
    this.lumaMatrixVerticalSize = map(obj.lumaMatrixVerticalSize);
    this.lumaEffectStrength = map(obj.lumaEffectStrength);
    this.chromaMatrixHorizontalSize = map(obj.chromaMatrixHorizontalSize);
    this.chromaMatrixVerticalSize = map(obj.chromaMatrixVerticalSize);
    this.chromaEffectStrength = map(obj.chromaEffectStrength);
  }
}

export default UnsharpFilter;

