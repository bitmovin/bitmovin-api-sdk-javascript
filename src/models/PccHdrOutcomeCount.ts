import {map, mapArray} from '../common/Mapper';
import PccHdrConfidence from './PccHdrConfidence';
import PccHdrOutcome from './PccHdrOutcome';

/**
 * @export
 * @class PccHdrOutcomeCount
 */
export class PccHdrOutcomeCount {
  /**
   * @type {PccHdrOutcome}
   * @memberof PccHdrOutcomeCount
   */
  public outcome?: PccHdrOutcome;

  /**
   * Null only for unreported readings. Evidence includes both HDR and SDR outcomes. (required)
   * @type {PccHdrConfidence}
   * @memberof PccHdrOutcomeCount
   */
  public confidence?: PccHdrConfidence;

  /**
   * @type {string}
   * @memberof PccHdrOutcomeCount
   */
  public label?: string;

  /**
   * Selected HDR playback passes with this outcome. All six outcomes sum to HDR passes. (required)
   * @type {number}
   * @memberof PccHdrOutcomeCount
   */
  public cells?: number;

  constructor(obj?: Partial<PccHdrOutcomeCount>) {
    if(!obj) {
      return;
    }
    this.outcome = map(obj.outcome);
    this.confidence = map(obj.confidence);
    this.label = map(obj.label);
    this.cells = map(obj.cells);
  }
}

export default PccHdrOutcomeCount;

