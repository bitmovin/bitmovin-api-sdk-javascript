import {map, mapArray} from '../common/Mapper';
import PccCombination from './PccCombination';
import PccCoverage from './PccCoverage';
import PccDevice from './PccDevice';
import PccHdrLegendEntry from './PccHdrLegendEntry';
import PccReportView from './PccReportView';
import PccSummary from './PccSummary';
import PccVerdictLegendEntry from './PccVerdictLegendEntry';

/**
 * @export
 * @class PccCompatibilityMatrix
 */
export class PccCompatibilityMatrix {
  /**
   * The effective selection already applied to this matrix, its summary and coverage. (required)
   * @type {PccReportView}
   * @memberof PccCompatibilityMatrix
   */
  public view?: PccReportView;

  /**
   * When this report was assembled from what had been measured by then. (required)
   * @type {string}
   * @memberof PccCompatibilityMatrix
   */
  public assembledAt?: string;

  /**
   * Every Bitmovin Player version that measured any device here. More than one means the measurement spanned a player release, and support is a property of the player and the device together. (required)
   * @type {string[]}
   * @memberof PccCompatibilityMatrix
   */
  public playerVersions?: string[];

  /**
   * UUIDs of matching runs whose job metadata was read, including runs with no included session evidence. Never run names. Quote one to Bitmovin support while the fleet still holds it. The count says nothing about coverage. (required)
   * @type {string[]}
   * @memberof PccCompatibilityMatrix
   */
  public runIds?: string[];

  /**
   * Inclusive run creation instant in UTC used by this generation, or null for no cutoff. Legacy dates mean midnight UTC. Changing the held cutoff does not alter this report. (required)
   * @type {Date}
   * @memberof PccCompatibilityMatrix
   */
  public startDate?: Date;

  /**
   * Maximum sessions read per pool by this generation. Null for reports produced before a limit was recorded. (required)
   * @type {number}
   * @memberof PccCompatibilityMatrix
   */
  public sessionLimit?: number;

  /**
   * @type {PccCoverage}
   * @memberof PccCompatibilityMatrix
   */
  public coverage?: PccCoverage;

  /**
   * Every verdict mark and its wording, so the grid reads without this service's source. (required)
   * @type {PccVerdictLegendEntry[]}
   * @memberof PccCompatibilityMatrix
   */
  public legend?: PccVerdictLegendEntry[];

  /**
   * The same for the marks an HDR result wears. (required)
   * @type {PccHdrLegendEntry[]}
   * @memberof PccCompatibilityMatrix
   */
  public hdrLegend?: PccHdrLegendEntry[];

  /**
   * @type {PccCombination[]}
   * @memberof PccCompatibilityMatrix
   */
  public combinations?: PccCombination[];

  /**
   * @type {PccDevice[]}
   * @memberof PccCompatibilityMatrix
   */
  public devices?: PccDevice[];

  /**
   * @type {PccSummary}
   * @memberof PccCompatibilityMatrix
   */
  public summary?: PccSummary;

  constructor(obj?: Partial<PccCompatibilityMatrix>) {
    if(!obj) {
      return;
    }
    this.view = map(obj.view, PccReportView);
    this.assembledAt = map(obj.assembledAt);
    this.playerVersions = mapArray(obj.playerVersions);
    this.runIds = mapArray(obj.runIds);
    this.startDate = map(obj.startDate, Date);
    this.sessionLimit = map(obj.sessionLimit);
    this.coverage = map(obj.coverage, PccCoverage);
    this.legend = mapArray(obj.legend, PccVerdictLegendEntry);
    this.hdrLegend = mapArray(obj.hdrLegend, PccHdrLegendEntry);
    this.combinations = mapArray(obj.combinations, PccCombination);
    this.devices = mapArray(obj.devices, PccDevice);
    this.summary = map(obj.summary, PccSummary);
  }
}

export default PccCompatibilityMatrix;

