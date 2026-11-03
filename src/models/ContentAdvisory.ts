import {map, mapArray} from '../common/Mapper';
import AdvisoryCategory from './AdvisoryCategory';
import AdvisoryConfidence from './AdvisoryConfidence';

/**
 * A content advisory reported for a shot, based on detected imagery or a conservative assumption when the analysis was blocked.
 * @export
 * @class ContentAdvisory
 */
export class ContentAdvisory {
  /**
   * Kind of advisory-relevant imagery reported, or conservatively assumed when the shot has status BLOCKED. (required)
   * @type {AdvisoryCategory}
   * @memberof ContentAdvisory
   */
  public category?: AdvisoryCategory;

  /**
   * Confidence tier derived from the visual evidence reported by the analysis, for prioritizing human review rather than as a calibrated probability. (required)
   * @type {AdvisoryConfidence}
   * @memberof ContentAdvisory
   */
  public confidence?: AdvisoryConfidence;

  /**
   * Explanation of the reported visual evidence, or of the conservative assumption when the shot could not be assessed. Retains its original value in language-specific results.
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

