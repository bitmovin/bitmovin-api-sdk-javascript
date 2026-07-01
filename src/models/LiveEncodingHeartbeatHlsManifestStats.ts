import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatManifestUpdate from './LiveEncodingHeartbeatManifestUpdate';
import LiveEncodingHeartbeatManifestUpdateLatencyStats from './LiveEncodingHeartbeatManifestUpdateLatencyStats';

/**
 * HLS manifest update monitoring data for a live encoding heartbeat.
 * @export
 * @class LiveEncodingHeartbeatHlsManifestStats
 */
export class LiveEncodingHeartbeatHlsManifestStats {
  /**
   * Id of the HLS manifest these statistics belong to.
   * @type {string}
   * @memberof LiveEncodingHeartbeatHlsManifestStats
   */
  public manifestId?: string;

  /**
   * Aggregate latency statistics over recorded manifest updates.
   * @type {LiveEncodingHeartbeatManifestUpdateLatencyStats}
   * @memberof LiveEncodingHeartbeatHlsManifestStats
   */
  public manifestUpdateLatencyStats?: LiveEncodingHeartbeatManifestUpdateLatencyStats;

  /**
   * Per-manifest outlier-only (high-latency) manifest updates, ordered newest to oldest.
   * @type {LiveEncodingHeartbeatManifestUpdate[]}
   * @memberof LiveEncodingHeartbeatHlsManifestStats
   */
  public manifestUpdates?: LiveEncodingHeartbeatManifestUpdate[];

  constructor(obj?: Partial<LiveEncodingHeartbeatHlsManifestStats>) {
    if(!obj) {
      return;
    }
    this.manifestId = map(obj.manifestId);
    this.manifestUpdateLatencyStats = map(obj.manifestUpdateLatencyStats, LiveEncodingHeartbeatManifestUpdateLatencyStats);
    this.manifestUpdates = mapArray(obj.manifestUpdates, LiveEncodingHeartbeatManifestUpdate);
  }
}

export default LiveEncodingHeartbeatHlsManifestStats;

