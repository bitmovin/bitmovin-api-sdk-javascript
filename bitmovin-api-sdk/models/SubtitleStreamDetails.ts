import {map} from '../common/Mapper';
import StreamDetails from './StreamDetails';

/**
 * @export
 * @class SubtitleStreamDetails
 */
export default class SubtitleStreamDetails extends StreamDetails {
  constructor(obj: any) {
    super(obj);
    this.language = map(obj.language);
    this.hearingImpaired = map(obj.hearingImpaired);
  }

  /**
   * @type {string}
   * @memberof SubtitleStreamDetails
   */
  public language?: string;
  /**
   * @type {boolean}
   * @memberof SubtitleStreamDetails
   */
  public hearingImpaired?: boolean;
}
