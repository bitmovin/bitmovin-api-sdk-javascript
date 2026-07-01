import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatHlsManifestStats from './LiveEncodingHeartbeatHlsManifestStats';

/**
 * Manifest statistics for a live encoding heartbeat.
 * @export
 * @class LiveEncodingHeartbeatManifests
 */
export class LiveEncodingHeartbeatManifests {
  /**
   * Per-manifest HLS update statistics; one entry per HLS manifest.
   * @type {LiveEncodingHeartbeatHlsManifestStats[]}
   * @memberof LiveEncodingHeartbeatManifests
   */
  public hls?: LiveEncodingHeartbeatHlsManifestStats[];

  constructor(obj?: Partial<LiveEncodingHeartbeatManifests>) {
    if(!obj) {
      return;
    }
    this.hls = mapArray(obj.hls, LiveEncodingHeartbeatHlsManifestStats);
  }
}

export default LiveEncodingHeartbeatManifests;

