import {map, mapArray} from '../common/Mapper';
import PccHdrConfidence from './PccHdrConfidence';

/**
 * @export
 * @class PccHdrShare
 */
export class PccHdrShare {
  /**
   * @type {PccHdrConfidence}
   * @memberof PccHdrShare
   */
  public confidence?: PccHdrConfidence;

  /**
   * @type {string}
   * @memberof PccHdrShare
   */
  public label?: string;

  /**
   * @type {number}
   * @memberof PccHdrShare
   */
  public cells?: number;

  constructor(obj?: Partial<PccHdrShare>) {
    if(!obj) {
      return;
    }
    this.confidence = map(obj.confidence);
    this.label = map(obj.label);
    this.cells = map(obj.cells);
  }
}

export default PccHdrShare;

