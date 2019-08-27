import {map} from '../common/Mapper';
import SegmentsMediaInfo from './SegmentsMediaInfo';

/**
 * @export
 * @class ClosedCaptionsMediaInfo
 */
export class ClosedCaptionsMediaInfo extends SegmentsMediaInfo {
  /**
   * Specifies a Rendition within the segments in the Media Playlist. (See HLS spec 4.3.4.1. EXT-X-MEDIA INSTREAM-ID) (required)
   * @type {string}
   * @memberof ClosedCaptionsMediaInfo
   */
  public instreamId?: string;

  /**
   * A value of true indicates that the Rendition contains content which is considered essential to play.
   * @type {boolean}
   * @memberof ClosedCaptionsMediaInfo
   */
  public forced?: boolean;

  constructor(obj: Partial<ClosedCaptionsMediaInfo>) {
    super(obj);

    this.instreamId = obj.instreamId;
    this.forced = obj.forced;
  }
}

export default ClosedCaptionsMediaInfo;

