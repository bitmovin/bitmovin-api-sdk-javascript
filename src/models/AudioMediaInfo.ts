import {map, mapArray} from '../common/Mapper';
import StandardMediaInfo from './StandardMediaInfo';

/**
 * @export
 * @class AudioMediaInfo
 */
export class AudioMediaInfo extends StandardMediaInfo {
  /**
   * A value of true indicates that the Rendition contains content which is considered essential to play.
   * @type {boolean}
   * @memberof AudioMediaInfo
   */
  public forced?: boolean;

  constructor(obj?: Partial<AudioMediaInfo>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.forced = map(obj.forced);
  }
}

export default AudioMediaInfo;

