import {map, mapArray} from '../common/Mapper';

/**
 * A single media-advancing HLS manifest update.
 * @export
 * @class LiveEncodingHeartbeatManifestUpdate
 */
export class LiveEncodingHeartbeatManifestUpdate {
  /**
   * Wall-clock time the media-advancing manifest update occured, returned as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof LiveEncodingHeartbeatManifestUpdate
   */
  public manifestUpdateWallClockTime?: Date;

  /**
   * Latest media presentation time across renditions (min of all playlists' stream progress), returned as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof LiveEncodingHeartbeatManifestUpdate
   */
  public latestMediaPresentationTime?: Date;

  /**
   * Manifest update latency in milliseconds (elapsed wall-clock minus media-time advanced).
   * @type {number}
   * @memberof LiveEncodingHeartbeatManifestUpdate
   */
  public manifestUpdateLatency?: number;

  constructor(obj?: Partial<LiveEncodingHeartbeatManifestUpdate>) {
    if(!obj) {
      return;
    }
    this.manifestUpdateWallClockTime = map(obj.manifestUpdateWallClockTime, Date);
    this.latestMediaPresentationTime = map(obj.latestMediaPresentationTime, Date);
    this.manifestUpdateLatency = map(obj.manifestUpdateLatency);
  }
}

export default LiveEncodingHeartbeatManifestUpdate;

