import {map} from '../common/Mapper';

/**
 * @export
 * @class EncodingStatistics
 */
export class EncodingStatistics {
  /**
   * Date, format. yyyy-MM-dd (required)
   * @type {Date}
   * @memberof EncodingStatistics
   */
  public date?: Date;

  /**
   * Bytes encoded for this encoding. (required)
   * @type {number}
   * @memberof EncodingStatistics
   */
  public bytesEncoded?: number;

  /**
   * Time in seconds encoded for this encoding. (required)
   * @type {number}
   * @memberof EncodingStatistics
   */
  public timeEncoded?: number;

  constructor(obj: Partial<EncodingStatistics>) {

    this.date = map<Date>(obj.date, Date);
    this.bytesEncoded = obj.bytesEncoded;
    this.timeEncoded = obj.timeEncoded;
  }
}

export default EncodingStatistics;

