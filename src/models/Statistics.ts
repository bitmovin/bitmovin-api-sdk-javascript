import {map} from '../common/Mapper';

/**
 * @export
 * @class Statistics
 */
export class Statistics {
  /**
   * Bytes encoded total. (required)
   * @type {number}
   * @memberof Statistics
   */
  public bytesEncodedTotal?: number;

  /**
   * Time in seconds encoded for all contained daily statistics. (required)
   * @type {number}
   * @memberof Statistics
   */
  public timeEncodedTotal?: number;

  constructor(obj: Partial<Statistics>) {

    this.bytesEncodedTotal = obj.bytesEncodedTotal;
    this.timeEncodedTotal = obj.timeEncodedTotal;
  }
}

export default Statistics;

