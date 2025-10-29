import {map, mapArray} from '../common/Mapper';
import MainSubject from './MainSubject';

/**
 * Represents a continuous camera shot within a scene, containing detailed visual analysis including subjects, timing, and descriptive metadata
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
   * A comprehensive textual description of the visual content, action, and context within this shot
   * @type {string}
   * @memberof Shot
   */
  public detailedDescription?: string;

  /**
   * A list of relevant keywords and tags that describe the content, themes, or notable elements in this shot
   * @type {string[]}
   * @memberof Shot
   */
  public keywords?: string[];

  /**
   * A collection of the primary subjects or objects detected and tracked within this shot, including their positions and characteristics
   * @type {MainSubject[]}
   * @memberof Shot
   */
  public mainSubjects?: MainSubject[];

  constructor(obj?: Partial<Shot>) {
    if(!obj) {
      return;
    }
    this.startInSeconds = map(obj.startInSeconds);
    this.endInSeconds = map(obj.endInSeconds);
    this.detailedDescription = map(obj.detailedDescription);
    this.keywords = mapArray(obj.keywords);
    this.mainSubjects = mapArray(obj.mainSubjects, MainSubject);
  }
}

export default Shot;

