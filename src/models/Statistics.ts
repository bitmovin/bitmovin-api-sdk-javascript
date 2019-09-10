import {map, mapArray} from '../common/Mapper';

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

  constructor(obj?: Partial<Statistics>) {
    if(!obj) {
      return;
    }
    this.bytesEncodedTotal = map(obj.bytesEncodedTotal);
    this.timeEncodedTotal = map(obj.timeEncodedTotal);
  }
}

export default Statistics;

