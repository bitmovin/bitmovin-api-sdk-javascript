import {map, mapArray} from '../common/Mapper';
import AdvisoryAnalysisStatus from './AdvisoryAnalysisStatus';
import ContentAdvisory from './ContentAdvisory';

/**
 * Advisory assessment for a shot.
 * @export
 * @class ShotAdvisories
 */
export class ShotAdvisories {
  /**
   * Outcome of the advisory assessment for this shot. (required)
   * @type {AdvisoryAnalysisStatus}
   * @memberof ShotAdvisories
   */
  public status?: AdvisoryAnalysisStatus;

  /**
   * Advisories reported for this shot. Consult status before interpreting an empty or omitted list. (required)
   * @type {ContentAdvisory[]}
   * @memberof ShotAdvisories
   */
  public advisories?: ContentAdvisory[];

  constructor(obj?: Partial<ShotAdvisories>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.advisories = mapArray(obj.advisories, ContentAdvisory);
  }
}

export default ShotAdvisories;

