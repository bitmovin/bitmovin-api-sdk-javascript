import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatManifests from './LiveEncodingHeartbeatManifests';
import LiveEncodingHeartbeatSegments from './LiveEncodingHeartbeatSegments';

/**
 * Output statistics for a live encoding heartbeat.
 * @export
 * @class LiveEncodingHeartbeatOutput
 */
export class LiveEncodingHeartbeatOutput {
  /**
   * Manifest statistics for the live encoding output.
   * @type {LiveEncodingHeartbeatManifests}
   * @memberof LiveEncodingHeartbeatOutput
   */
  public manifests?: LiveEncodingHeartbeatManifests;

  /**
   * Segment processing statistics for the live encoding output.
   * @type {LiveEncodingHeartbeatSegments}
   * @memberof LiveEncodingHeartbeatOutput
   */
  public segments?: LiveEncodingHeartbeatSegments;

  constructor(obj?: Partial<LiveEncodingHeartbeatOutput>) {
    if(!obj) {
      return;
    }
    this.manifests = map(obj.manifests, LiveEncodingHeartbeatManifests);
    this.segments = map(obj.segments, LiveEncodingHeartbeatSegments);
  }
}

export default LiveEncodingHeartbeatOutput;

