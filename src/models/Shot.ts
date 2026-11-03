import {map, mapArray} from '../common/Mapper';
import MainSubject from './MainSubject';
import ShotAdvisories from './ShotAdvisories';

/**
 * A detected shot associated with one scene. A shot can cross a scene boundary or lie entirely outside its associated scene. Use the shot's own timestamps to locate its content.
 * @export
 * @class Shot
 */
export class Shot {
  /**
   * The start time of the shot in seconds from the beginning of the video (required)
   * @type {number}
   * @memberof Shot
   */
  public startInSeconds?: number;

  /**
   * The end time of the shot in seconds from the beginning of the video (required)
   * @type {number}
   * @memberof Shot
   */
  public endInSeconds?: number;

  /**
   * Description of the shot's visual content, action and context.
   * @type {string}
   * @memberof Shot
   */
  public detailedDescription?: string;

  /**
   * Keywords describing the shot's content, themes or notable elements.
   * @type {string[]}
   * @memberof Shot
   */
  public keywords?: string[];

  /**
   * Selected subjects or objects identified in this shot.
   * @type {MainSubject[]}
   * @memberof Shot
   */
  public mainSubjects?: MainSubject[];

  /**
   * Content advisory results for this shot, or null when no assessment is available. Availability depends on whether advisory analysis was enabled and supported by the analysis version.
   * @type {ShotAdvisories}
   * @memberof Shot
   */
  public shotAdvisories?: ShotAdvisories;

  constructor(obj?: Partial<Shot>) {
    if(!obj) {
      return;
    }
    this.startInSeconds = map(obj.startInSeconds);
    this.endInSeconds = map(obj.endInSeconds);
    this.detailedDescription = map(obj.detailedDescription);
    this.keywords = mapArray(obj.keywords);
    this.mainSubjects = mapArray(obj.mainSubjects, MainSubject);
    this.shotAdvisories = map(obj.shotAdvisories, ShotAdvisories);
  }
}

export default Shot;

