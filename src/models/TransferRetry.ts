import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import Status from './Status';

/**
 * @export
 * @class TransferRetry
 */
export class TransferRetry extends BitmovinResource {
  /**
   * The current status of the transfer-retry.
   * @type {Status}
   * @memberof TransferRetry
   */
  public status?: Status;

  /**
   * Timestamp when the transfer-retry was started, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof TransferRetry
   */
  public startedAt?: Date;

  /**
   * Timestamp when the transfer-retry status changed to 'FINISHED', returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof TransferRetry
   */
  public finishedAt?: Date;

  /**
   * Timestamp when the transfer-retry status changed to 'ERROR', returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof TransferRetry
   */
  public errorAt?: Date;

  constructor(obj?: Partial<TransferRetry>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.startedAt = map(obj.startedAt, Date);
    this.finishedAt = map(obj.finishedAt, Date);
    this.errorAt = map(obj.errorAt, Date);
  }
}

export default TransferRetry;

