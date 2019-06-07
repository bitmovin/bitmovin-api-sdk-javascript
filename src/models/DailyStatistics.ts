import {map} from '../common/Mapper';
import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';

/**
 * @export
 * @class DailyStatistics
 */
export class DailyStatistics {
  constructor(obj: any) {
    this.date = map(obj.date, Date);
    this.bytesEncoded = map(obj.bytesEncoded);
    this.timeEncoded = map(obj.timeEncoded);
    this.billableMinutes = map(obj.billableMinutes);
    this.label = map(obj.label);
    this.billableEncodingMinutes = map<BillableEncodingMinutes>(obj.billableEncodingMinutes, BillableEncodingMinutes);
    this.billableTransmuxingMinutes = map(obj.billableTransmuxingMinutes);
    this.billableFeatureMinutes = map<BillableEncodingFeatureMinutes>(obj.billableFeatureMinutes, BillableEncodingFeatureMinutes);
  }

  /**
   * Date for the shown data. Format: yyyy-MM-dd
   * @type {Date}
   * @memberof DailyStatistics
   */
  public date: Date;
  /**
   * Bytes encoded.
   * @type {number}
   * @memberof DailyStatistics
   */
  public bytesEncoded: number;
  /**
   * Time in seconds encoded for this day.
   * @type {number}
   * @memberof DailyStatistics
   */
  public timeEncoded: number;
  /**
   * The billable minutes.
   * @type {number}
   * @memberof DailyStatistics
   */
  public billableMinutes?: number;
  /**
   * Label identifier.
   * @type {string}
   * @memberof DailyStatistics
   */
  public label?: string;
  /**
   * Billable minutes for each encoding configuration.
   * @type {Array<BillableEncodingMinutes>}
   * @memberof DailyStatistics
   */
  public billableEncodingMinutes?: Array<BillableEncodingMinutes>;
  /**
   * Billable minutes for muxings.
   * @type {number}
   * @memberof DailyStatistics
   */
  public billableTransmuxingMinutes?: number;
  /**
   * Billable minutes for features
   * @type {Array<BillableEncodingFeatureMinutes>}
   * @memberof DailyStatistics
   */
  public billableFeatureMinutes?: Array<BillableEncodingFeatureMinutes>;
}

export default DailyStatistics;

