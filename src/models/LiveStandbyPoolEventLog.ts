import {map, mapArray} from '../common/Mapper';
import LiveStandbyPoolEventLogType from './LiveStandbyPoolEventLogType';

/**
 * @export
 * @class LiveStandbyPoolEventLog
 */
export class LiveStandbyPoolEventLog {
  /**
   * UUID of the entry
   * @type {string}
   * @memberof LiveStandbyPoolEventLog
   */
  public id?: string;

  /**
   * Id of the standby_pool associated with the event log
   * @type {string}
   * @memberof LiveStandbyPoolEventLog
   */
  public standbyPoolId?: string;

  /**
   * (Optional) Id of the standby pool encoding associated with the event
   * @type {string}
   * @memberof LiveStandbyPoolEventLog
   */
  public standbyPoolEncodingId?: string;

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {string}
   * @memberof LiveStandbyPoolEventLog
   */
  public createdAt?: string;

  /**
   * Short description of the event
   * @type {string}
   * @memberof LiveStandbyPoolEventLog
   */
  public message?: string;

  /**
   * Detailed description, payloads, hints on how to resolve errors, etc
   * @type {string}
   * @memberof LiveStandbyPoolEventLog
   */
  public details?: string;

  /**
   * @type {LiveStandbyPoolEventLogType}
   * @memberof LiveStandbyPoolEventLog
   */
  public eventType?: LiveStandbyPoolEventLogType;

  constructor(obj?: Partial<LiveStandbyPoolEventLog>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.standbyPoolId = map(obj.standbyPoolId);
    this.standbyPoolEncodingId = map(obj.standbyPoolEncodingId);
    this.createdAt = map(obj.createdAt);
    this.message = map(obj.message);
    this.details = map(obj.details);
    this.eventType = map(obj.eventType);
  }
}

export default LiveStandbyPoolEventLog;

