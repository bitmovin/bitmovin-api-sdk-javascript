import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccCoverage
 */
export class PccCoverage {
  /**
   * Distinct pools in the held measurement before any view exclusions. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesBeforeView?: number;

  /**
   * Pools omitted by the device filter after prerelease exclusions. Each omitted pool is counted once, in prerelease, device-filter, then reported-only order. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesExcludedByDeviceFilter?: number;

  /**
   * Pools omitted by reportedOnly because no selected cell answers about the device, after prerelease and device-filter exclusions. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesExcludedAsUnreported?: number;

  /**
   * Distinct pools omitted because all recorded browser evidence is pre-release. Zero when includePrerelease is true. Unknown browser identities do not cause prerelease exclusion. Row coverage and summaries describe the retained pools. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesExcludedAsPrerelease?: number;

  /**
   * @type {number}
   * @memberof PccCoverage
   */
  public devices?: number;

  /**
   * Pools with no included sessions. Present in the report as unmeasured, including when the start date excluded all evidence. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesWithNoSession?: number;

  /**
   * Pools every one of whose sessions came from one physical machine — a claim about that machine, not the model. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesOnOneUnit?: number;

  /**
   * Pools no naming rule recognised, published under the stated placeholder. Counted here so a reader can tell how much of the fleet this report cannot name rather than discovering it row by row. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesUnderPlaceholderName?: number;

  /**
   * Cells whose verdict rests on a single session. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public cellsOnOneSession?: number;

  /**
   * Jobs the fleet could not attribute to any pool, so no row of this report accounts for them. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public unattributableJobs?: number;

  /**
   * Jobs that had not finished when this was assembled. Their pools carry nothing measured. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public unsettledJobs?: number;

  /**
   * Pools with sessions excluded by the start date or session limit, including those with no included evidence. (required)
   * @type {number}
   * @memberof PccCoverage
   */
  public devicesOnRecentEvidence?: number;

  constructor(obj?: Partial<PccCoverage>) {
    if(!obj) {
      return;
    }
    this.devicesBeforeView = map(obj.devicesBeforeView);
    this.devicesExcludedByDeviceFilter = map(obj.devicesExcludedByDeviceFilter);
    this.devicesExcludedAsUnreported = map(obj.devicesExcludedAsUnreported);
    this.devicesExcludedAsPrerelease = map(obj.devicesExcludedAsPrerelease);
    this.devices = map(obj.devices);
    this.devicesWithNoSession = map(obj.devicesWithNoSession);
    this.devicesOnOneUnit = map(obj.devicesOnOneUnit);
    this.devicesUnderPlaceholderName = map(obj.devicesUnderPlaceholderName);
    this.cellsOnOneSession = map(obj.cellsOnOneSession);
    this.unattributableJobs = map(obj.unattributableJobs);
    this.unsettledJobs = map(obj.unsettledJobs);
    this.devicesOnRecentEvidence = map(obj.devicesOnRecentEvidence);
  }
}

export default PccCoverage;

