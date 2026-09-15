import {map, mapArray} from '../common/Mapper';
import PccHdrConfidence from './PccHdrConfidence';

/**
 * @export
 * @class PccPicture
 */
export class PccPicture {
  /**
   * The mark the cell wears. `hdrLegend` explains it. (required)
   * @type {string}
   * @memberof PccPicture
   */
  public mark?: string;

  /**
   * @type {PccHdrConfidence}
   * @memberof PccPicture
   */
  public confidence?: PccHdrConfidence;

  /**
   * Whether this is a result somebody should chase, which is not how confident it is. (required)
   * @type {boolean}
   * @memberof PccPicture
   */
  public actionable?: boolean;

  /**
   * @type {string}
   * @memberof PccPicture
   */
  public sentence?: string;

  constructor(obj?: Partial<PccPicture>) {
    if(!obj) {
      return;
    }
    this.mark = map(obj.mark);
    this.confidence = map(obj.confidence);
    this.actionable = map(obj.actionable);
    this.sentence = map(obj.sentence);
  }
}

export default PccPicture;

