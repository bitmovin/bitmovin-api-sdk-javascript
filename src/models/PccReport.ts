import {map, mapArray} from '../common/Mapper';
import PccCompatibilityMatrix from './PccCompatibilityMatrix';

/**
 * @export
 * @class PccReport
 */
export class PccReport {
  /**
   * Identifies this report. A new generation produces a new one. (required)
   * @type {string}
   * @memberof PccReport
   */
  public reportId?: string;

  /**
   * When the generation that produced this report finished. (required)
   * @type {string}
   * @memberof PccReport
   */
  public generatedAt?: string;

  /**
   * The selected report. By default, pools whose recorded browsers are all pre-release are excluded; includePrerelease retains them. Unknown browser identities do not cause prerelease exclusion. Null where a report is held that this service cannot read, which a generation replaces. (required)
   * @type {PccCompatibilityMatrix}
   * @memberof PccReport
   */
  public report?: PccCompatibilityMatrix;

  constructor(obj?: Partial<PccReport>) {
    if(!obj) {
      return;
    }
    this.reportId = map(obj.reportId);
    this.generatedAt = map(obj.generatedAt);
    this.report = map(obj.report, PccCompatibilityMatrix);
  }
}

export default PccReport;

