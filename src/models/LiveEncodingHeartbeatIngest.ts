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

  /**
   * Total number of dropped video packets since the live encoding started. 
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public droppedPacketsVideo?: number;

  /**
   * Total number of dropped audio packets since the live encoding started. 
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public droppedPacketsAudio?: number;

  /**
   * Total number of corrupt video packets since the live encoding started. 
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public corruptPacketsVideo?: number;

  /**
   * Total number of corrupt audio packets since the live encoding started. 
   * @type {number}
   * @memberof LiveEncodingHeartbeatIngest
   */
  public corruptPacketsAudio?: number;

  constructor(obj?: Partial<LiveEncodingHeartbeatIngest>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.healthy = map(obj.healthy);
    this.ingestPoints = mapArray(obj.ingestPoints, LiveEncodingHeartbeatIngestPoint);
    this.streams = mapArray(obj.streams, LiveEncodingHeartbeatIngestStream);
    this.rtmpUserIngestInfo = map(obj.rtmpUserIngestInfo, RtmpUserIngestInfo);
    this.droppedPacketsVideo = map(obj.droppedPacketsVideo);
    this.droppedPacketsAudio = map(obj.droppedPacketsAudio);
    this.corruptPacketsVideo = map(obj.corruptPacketsVideo);
    this.corruptPacketsAudio = map(obj.corruptPacketsAudio);
  }
}

export default LiveEncodingHeartbeatIngest;

