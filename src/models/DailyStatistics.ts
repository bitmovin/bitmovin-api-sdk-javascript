import {map} from '../common/Mapper';
import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';

/**
 * @export
 * @class DailyStatistics
 */
export class DailyStatistics {
  /**
   * Date for the shown data. Format: yyyy-MM-dd (required)
   * @type {Date}
   * @memberof DailyStatistics
   */
  public date: Date;

  /**
   * Bytes encoded. (required)
   * @type {number}
   * @memberof DailyStatistics
   */
  public bytesEncoded: number;

  /**
   * Time in seconds encoded for this day. (required)
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
   * @type {BillableEncodingMinutes[]}
   * @memberof DailyStatistics
   */
  public billableEncodingMinutes?: BillableEncodingMinutes[];

  /**
   * Billable minutes for muxings.
   * @type {number}
   * @memberof DailyStatistics
   */
  public billableTransmuxingMinutes?: number;

  /**
   * Billable minutes for features
   * @type {BillableEncodingFeatureMinutes[]}
   * @memberof DailyStatistics
   */
  public billableFeatureMinutes?: BillableEncodingFeatureMinutes[];

  constructor(obj: Partial<DailyStatistics>) {
    this.date = map(obj.date, Date);
    this.bytesEncoded = map(obj.bytesEncoded);
    this.timeEncoded = map(obj.timeEncoded);
    this.billableMinutes = map(obj.billableMinutes);
    this.label = map(obj.label);
    this.billableEncodingMinutes = map<BillableEncodingMinutes>(obj.billableEncodingMinutes, BillableEncodingMinutes);
    this.billableTransmuxingMinutes = map(obj.billableTransmuxingMinutes);
    this.billableFeatureMinutes = map<BillableEncodingFeatureMinutes>(obj.billableFeatureMinutes, BillableEncodingFeatureMinutes);
  }
}

export default DailyStatistics;

