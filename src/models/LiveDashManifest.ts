import {map} from '../common/Mapper';

/**
 * @export
 * @class LiveDashManifest
 */
export class LiveDashManifest {
  /**
   * Dash manifest ids (required)
   * @type {string}
   * @memberof LiveDashManifest
   */
  public manifestId: string;

  /**
   * Timeshift in seconds
   * @type {number}
   * @memberof LiveDashManifest
   */
  public timeshift?: number;

  /**
   * Live edge offset in seconds
   * @type {number}
   * @memberof LiveDashManifest
   */
  public liveEdgeOffset?: number;

  constructor(obj: Partial<LiveDashManifest>) {
    this.manifestId = map(obj.manifestId);
    this.timeshift = map(obj.timeshift);
    this.liveEdgeOffset = map(obj.liveEdgeOffset);
  }
}

export default LiveDashManifest;

