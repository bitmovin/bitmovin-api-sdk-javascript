import {map, mapArray} from '../common/Mapper';
import InputType from './InputType';

/**
 * Details about an individual ingestPoint within the live ingest.
 * @export
 * @class LiveEncodingHeartbeatIngestPoint
 */
export class LiveEncodingHeartbeatIngestPoint {
  /**
   * The name of the ingestPoint of the original Input resource. 
   * @type {string}
   * @memberof LiveEncodingHeartbeatIngestPoint
   */
  public name?: string;

  /**
   * Id of the original Input resource. Note that multiple input points (main and backup) can be part of a single Input resource. 
   * @type {string}
   * @memberof LiveEncodingHeartbeatIngestPoint
   */
  public inputId?: string;

  /**
   * @type {InputType}
   * @memberof LiveEncodingHeartbeatIngestPoint
   */
  public inputType?: InputType;

  /**
   * Indicates whether this particular input is active.
   * @type {boolean}
   * @memberof LiveEncodingHeartbeatIngestPoint
   */
  public isActive?: boolean;

  /**
   * Indicates whether this particular input is a backup input.
   * @type {boolean}
   * @memberof LiveEncodingHeartbeatIngestPoint
   */
  public isBackup?: boolean;

  constructor(obj?: Partial<LiveEncodingHeartbeatIngestPoint>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.inputId = map(obj.inputId);
    this.inputType = map(obj.inputType);
    this.isActive = map(obj.isActive);
    this.isBackup = map(obj.isBackup);
  }
}

export default LiveEncodingHeartbeatIngestPoint;

