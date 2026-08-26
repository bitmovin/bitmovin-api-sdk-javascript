import {map, mapArray} from '../common/Mapper';
import AdvisoryCategory from './AdvisoryCategory';
import AdvisoryConfidence from './AdvisoryConfidence';

/**
 * A single piece of advisory-relevant imagery detected within a shot, for example for regulatory on-screen disclaimers
 * @export
 * @class ContentAdvisory
 */
export class ContentAdvisory {
  /**
   * The kind of advisory-relevant imagery that was detected (required)
   * @type {AdvisoryCategory}
   * @memberof ContentAdvisory
   */
  public category?: AdvisoryCategory;

  /**
   * The model's own certainty in this detection. Intended to help prioritise human review rather than as a threshold for discarding advisories: detection is tuned to flag uncertain cases rather than miss them, and shots that could not be analysed are reported with LOW confidence (required)
   * @type {AdvisoryConfidence}
   * @memberof ContentAdvisory
   */
  public confidence?: AdvisoryConfidence;

  /**
   * A short explanation of what was seen in the shot
   * @type {string}
   * @memberof ContentAdvisory
   */
  public reason?: string;

  constructor(obj?: Partial<ContentAdvisory>) {
    if(!obj) {
      return;
    }
    this.category = map(obj.category);
    this.confidence = map(obj.confidence);
    this.reason = map(obj.reason);
  }
}

export default ContentAdvisory;

