import {map, mapArray} from '../common/Mapper';
import PccVerdict from './PccVerdict';

/**
 * @export
 * @class PccVerdictShare
 */
export class PccVerdictShare {
  /**
   * @type {PccVerdict}
   * @memberof PccVerdictShare
   */
  public verdict?: PccVerdict;

  /**
   * The reader's word for it. (required)
   * @type {string}
   * @memberof PccVerdictShare
   */
  public label?: string;

  /**
   * Cells sharing this label, including verdicts grouped under `Not measured`. (required)
   * @type {number}
   * @memberof PccVerdictShare
   */
  public cells?: number;

  /**
   * False where the verdict says something about the measurement, not about the device. (required)
   * @type {boolean}
   * @memberof PccVerdictShare
   */
  public aboutTheDevice?: boolean;

  constructor(obj?: Partial<PccVerdictShare>) {
    if(!obj) {
      return;
    }
    this.verdict = map(obj.verdict);
    this.label = map(obj.label);
    this.cells = map(obj.cells);
    this.aboutTheDevice = map(obj.aboutTheDevice);
  }
}

export default PccVerdictShare;

