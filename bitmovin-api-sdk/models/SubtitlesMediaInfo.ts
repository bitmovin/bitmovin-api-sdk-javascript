import {map} from '../common/Mapper';
import StandardMediaInfo from './StandardMediaInfo';

/**
 * @export
 * @class SubtitlesMediaInfo
 */
export default class SubtitlesMediaInfo extends StandardMediaInfo {
  constructor(obj: any) {
    super(obj);
    this.forced = map(obj.forced);
  }

  /**
   * A value of true indicates that the Rendition contains content which is considered essential to play.
   * @type {boolean}
   * @memberof SubtitlesMediaInfo
   */
  public forced?: boolean;
}
