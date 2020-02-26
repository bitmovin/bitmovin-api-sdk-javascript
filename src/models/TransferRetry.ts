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
   * Timestamp when the transfer-retry was started, formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof TransferRetry
   */
  public startedAt?: Date;

  /**
   * Timestamp when the transfer-retry status changed to 'FINISHED', formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof TransferRetry
   */
  public finishedAt?: Date;

  /**
   * Timestamp when the transfer-retry status changed to 'ERROR', formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
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

