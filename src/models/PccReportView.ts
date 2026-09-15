import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccReportView
 */
export class PccReportView {
  /**
   * Effective trimmed lowercase substring matched against the published device name and qualifier. Empty means all devices. (required)
   * @type {string}
   * @memberof PccReportView
   */
  public device?: string;

  /**
   * Effective trimmed lowercase substring matched against codec identifiers. Empty means all codecs. (required)
   * @type {string}
   * @memberof PccReportView
   */
  public codec?: string;

  /**
   * Whether only HDR columns are selected. (required)
   * @type {boolean}
   * @memberof PccReportView
   */
  public hdrOnly?: boolean;

  /**
   * Whether pools need at least one selected cell answering about the device. (required)
   * @type {boolean}
   * @memberof PccReportView
   */
  public reportedOnly?: boolean;

  /**
   * Whether pools with only prerelease browser evidence are included. (required)
   * @type {boolean}
   * @memberof PccReportView
   */
  public includePrerelease?: boolean;

  constructor(obj?: Partial<PccReportView>) {
    if(!obj) {
      return;
    }
    this.device = map(obj.device);
    this.codec = map(obj.codec);
    this.hdrOnly = map(obj.hdrOnly);
    this.reportedOnly = map(obj.reportedOnly);
    this.includePrerelease = map(obj.includePrerelease);
  }
}

export default PccReportView;

