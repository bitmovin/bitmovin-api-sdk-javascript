import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatIngestPoint from './LiveEncodingHeartbeatIngestPoint';
import LiveEncodingHeartbeatIngestStream from './LiveEncodingHeartbeatIngestStream';
import LiveEncodingStatus from './LiveEncodingStatus';
import RtmpUserIngestInfo from './RtmpUserIngestInfo';

/**
 * Information about the live ingestion status
 * @export
 * @class LiveEncodingHeartbeatIngest
 */
export class LiveEncodingHeartbeatIngest {
  /**
   * @type {LiveEncodingStatus}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public status?: LiveEncodingStatus;

  /**
   * Indicates whether the ingest is healthy.
   * @type {boolean}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public healthy?: boolean;

  /**
   * Data about individual ingestPoints within the active live ingest. 
   * @type {LiveEncodingHeartbeatIngestPoint[]}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public ingestPoints?: LiveEncodingHeartbeatIngestPoint[];

  /**
   * Data about individual streams within the active live ingest. 
   * @type {LiveEncodingHeartbeatIngestStream[]}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public streams?: LiveEncodingHeartbeatIngestStream[];

  /**
   * @type {RtmpUserIngestInfo}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public rtmpUserIngestInfo?: RtmpUserIngestInfo;

  constructor(obj?: Partial<LiveEncodingHeartbeatIngest>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.healthy = map(obj.healthy);
    this.ingestPoints = mapArray(obj.ingestPoints, LiveEncodingHeartbeatIngestPoint);
    this.streams = mapArray(obj.streams, LiveEncodingHeartbeatIngestStream);
    this.rtmpUserIngestInfo = map(obj.rtmpUserIngestInfo, RtmpUserIngestInfo);
  }
}

export default LiveEncodingHeartbeatIngest;

