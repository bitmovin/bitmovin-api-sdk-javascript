import {map, mapArray} from '../common/Mapper';
import StandardMediaInfo from './StandardMediaInfo';

/**
 * @export
 * @class SubtitlesMediaInfo
 */
export class SubtitlesMediaInfo extends StandardMediaInfo {
  /**
   * A value of true indicates that the Rendition contains content which is considered essential to play.
   * @type {boolean}
   * @memberof SubtitlesMediaInfo
   */
  public forced?: boolean;

  constructor(obj?: Partial<SubtitlesMediaInfo>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.forced = map(obj.forced);
  }
}

export default SubtitlesMediaInfo;

