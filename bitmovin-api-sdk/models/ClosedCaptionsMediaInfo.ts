import {map} from '../common/Mapper';
import SegmentsMediaInfo from './SegmentsMediaInfo';

/**
 * @export
 * @class ClosedCaptionsMediaInfo
 */
export default class ClosedCaptionsMediaInfo extends SegmentsMediaInfo {
  constructor(obj: any) {
    super(obj);
    this.instreamId = map(obj.instreamId);
    this.forced = map(obj.forced);
  }

  /**
   * Specifies a Rendition within the segments in the Media Playlist. (See HLS spec 4.3.4.1. EXT-X-MEDIA INSTREAM-ID)
   * @type {string}
   * @memberof ClosedCaptionsMediaInfo
   */
  public instreamId: string;
  /**
   * A value of true indicates that the Rendition contains content which is considered essential to play.
   * @type {boolean}
   * @memberof ClosedCaptionsMediaInfo
   */
  public forced?: boolean;
}
