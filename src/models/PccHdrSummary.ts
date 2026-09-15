import {map, mapArray} from '../common/Mapper';
import PccHdrDevice from './PccHdrDevice';
import PccHdrFinding from './PccHdrFinding';
import PccHdrOutcomeCount from './PccHdrOutcomeCount';
import PccHdrShare from './PccHdrShare';

/**
 * @export
 * @class PccHdrSummary
 */
export class PccHdrSummary {
  /**
   * @type {PccHdrOutcomeCount[]}
   * @memberof PccHdrSummary
   */
  public outcomes?: PccHdrOutcomeCount[];

  /**
   * Selected device pools with at least one HDR playback pass. (required)
   * @type {PccHdrDevice[]}
   * @memberof PccHdrSummary
   */
  public byDevice?: PccHdrDevice[];

  /**
   * @type {PccHdrShare[]}
   * @memberof PccHdrSummary
   */
  public shares?: PccHdrShare[];

  /**
   * HDR passes in the report. The picture question does not arise on a cell that failed. (required)
   * @type {number}
   * @memberof PccHdrSummary
   */
  public passes?: number;

  /**
   * Passes carrying no reading at all, so a missing measurement never reads as a level of confidence. (required)
   * @type {number}
   * @memberof PccHdrSummary
   */
  public unreported?: number;

  /**
   * Passes where some instrument answered — frames read, or the device's own word. The `evidence` and `claim` shares above, added together. (required)
   * @type {number}
   * @memberof PccHdrSummary
   */
  public established?: number;

  /**
   * @type {PccHdrFinding[]}
   * @memberof PccHdrSummary
   */
  public findings?: PccHdrFinding[];

  constructor(obj?: Partial<PccHdrSummary>) {
    if(!obj) {
      return;
    }
    this.outcomes = mapArray(obj.outcomes, PccHdrOutcomeCount);
    this.byDevice = mapArray(obj.byDevice, PccHdrDevice);
    this.shares = mapArray(obj.shares, PccHdrShare);
    this.passes = map(obj.passes);
    this.unreported = map(obj.unreported);
    this.established = map(obj.established);
    this.findings = mapArray(obj.findings, PccHdrFinding);
  }
}

export default PccHdrSummary;

