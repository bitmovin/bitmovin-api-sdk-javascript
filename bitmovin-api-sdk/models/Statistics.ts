import {map} from '../common/Mapper';

/**
 * @export
 * @class Statistics
 */
export default class Statistics {
  constructor(obj: any) {
    this.bytesEncodedTotal = map(obj.bytesEncodedTotal);
    this.timeEncodedTotal = map(obj.timeEncodedTotal);
  }

  /**
   * Bytes encoded total.
   * @type {number}
   * @memberof Statistics
   */
  public bytesEncodedTotal: number;
  /**
   * Time in seconds encoded for all contained daily statistics.
   * @type {number}
   * @memberof Statistics
   */
  public timeEncodedTotal: number;
}
