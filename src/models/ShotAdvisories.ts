import {map, mapArray} from '../common/Mapper';
import AdvisoryAnalysisStatus from './AdvisoryAnalysisStatus';
import ContentAdvisory from './ContentAdvisory';

/**
 * The result of content advisory detection for a shot, covering both what was detected and whether the shot was assessed at all
 * @export
 * @class ShotAdvisories
 */
export class ShotAdvisories {
  /**
   * Whether and how the shot was assessed for content advisories (required)
   * @type {AdvisoryAnalysisStatus}
   * @memberof ShotAdvisories
   */
  public status?: AdvisoryAnalysisStatus;

  /**
   * The advisory-relevant imagery detected in this shot. Empty when the shot was assessed and nothing was found, or when it was not assessed at all (required)
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

