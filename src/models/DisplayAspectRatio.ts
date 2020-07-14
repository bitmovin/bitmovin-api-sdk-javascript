import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class DisplayAspectRatio
 */
export class DisplayAspectRatio {
  /**
   * The numerator of the display aspect ratio (DAR). For example for a DAR of 16:9, the value 16 must be used. (required)
   * @type {number}
   * @memberof DisplayAspectRatio
   */
  public numerator?: number;

  /**
   * The denominator of the display aspect ratio (DAR). For example for a DAR of 16:9, the value 9 must be used. (required)
   * @type {number}
   * @memberof DisplayAspectRatio
   */
  public denominator?: number;

  constructor(obj?: Partial<DisplayAspectRatio>) {
    if(!obj) {
      return;
    }
    this.numerator = map(obj.numerator);
    this.denominator = map(obj.denominator);
  }
}

export default DisplayAspectRatio;

