import {map, mapArray} from '../common/Mapper';
import LiveEncodingHeartbeatEvent from './LiveEncodingHeartbeatEvent';
import LiveEncodingHeartbeatIngest from './LiveEncodingHeartbeatIngest';
import LiveEncodingHeartbeatOutput from './LiveEncodingHeartbeatOutput';

/**
 * Heartbeat data for a Live Encoding.
 * @export
 * @class LiveEncodingHeartbeat
 */
export class LiveEncodingHeartbeat {
  /**
   * timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof LiveEncodingHeartbeat
   */
  public timestamp?: Date;

  /**
   * Information about the live ingestion status 
   * @type {LiveEncodingHeartbeatIngest}
   * @memberof LiveEncodingHeartbeat
   */
  public ingest?: LiveEncodingHeartbeatIngest;

  /**
   * Live encoding heartbeat events 
   * @type {LiveEncodingHeartbeatEvent[]}
   * @memberof LiveEncodingHeartbeat
   */
  public events?: LiveEncodingHeartbeatEvent[];

  /**
   * Output statistics for the live encoding 
   * @type {LiveEncodingHeartbeatOutput}
   * @memberof LiveEncodingHeartbeat
   */
  public output?: LiveEncodingHeartbeatOutput;

  constructor(obj?: Partial<LiveEncodingHeartbeat>) {
    if(!obj) {
      return;
    }
    this.timestamp = map(obj.timestamp, Date);
    this.ingest = map(obj.ingest, LiveEncodingHeartbeatIngest);
    this.events = mapArray(obj.events, LiveEncodingHeartbeatEvent);
    this.output = map(obj.output, LiveEncodingHeartbeatOutput);
  }
}

export default LiveEncodingHeartbeat;

