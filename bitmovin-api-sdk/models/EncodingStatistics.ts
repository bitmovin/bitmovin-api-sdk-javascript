import {map} from '../common/Mapper';

/**
 * @export
 * @class EncodingStatistics
 */
export default class EncodingStatistics {
  constructor(obj: any) {
    this.date = map(obj.date);
    this.bytesEncoded = map(obj.bytesEncoded);
    this.timeEncoded = map(obj.timeEncoded);
  }

  /**
   * Date, format. yyyy-MM-dd
   * @type {Date}
   * @memberof EncodingStatistics
   */
  public date: Date;
  /**
   * Bytes encoded for this encoding.
   * @type {number}
   * @memberof EncodingStatistics
   */
  public bytesEncoded: number;
  /**
   * Time in seconds encoded for this encoding.
   * @type {number}
   * @memberof EncodingStatistics
   */
  public timeEncoded: number;
}
