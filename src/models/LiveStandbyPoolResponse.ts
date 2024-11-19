import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import LiveStandbyPoolStatus from './LiveStandbyPoolStatus';

/**
 * @export
 * @class LiveStandbyPoolResponse
 */
export class LiveStandbyPoolResponse extends BitmovinResource {
  /**
   * Number of instances to keep ready for streaming while the pool is running (required)
   * @type {number}
   * @memberof LiveStandbyPoolResponse
   */
  public targetPoolSize?: number;

  /**
   * Number of instances currently in ready state in the pool
   * @type {number}
   * @memberof LiveStandbyPoolResponse
   */
  public readyEncodings?: number;

  /**
   * Number of instances currently being prepared in the pool
   * @type {number}
   * @memberof LiveStandbyPoolResponse
   */
  public preparingEncodings?: number;

  /**
   * Number of instances currently in error state in the pool
   * @type {number}
   * @memberof LiveStandbyPoolResponse
   */
  public errorEncodings?: number;

  /**
   * The name of the encoding template used with this Standby Pool
   * @type {string}
   * @memberof LiveStandbyPoolResponse
   */
  public encodingTemplateName?: string;

  /**
   * @type {LiveStandbyPoolStatus}
   * @memberof LiveStandbyPoolResponse
   */
  public poolStatus?: LiveStandbyPoolStatus;

  constructor(obj?: Partial<LiveStandbyPoolResponse>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.targetPoolSize = map(obj.targetPoolSize);
    this.readyEncodings = map(obj.readyEncodings);
    this.preparingEncodings = map(obj.preparingEncodings);
    this.errorEncodings = map(obj.errorEncodings);
    this.encodingTemplateName = map(obj.encodingTemplateName);
    this.poolStatus = map(obj.poolStatus);
  }
}

export default LiveStandbyPoolResponse;

