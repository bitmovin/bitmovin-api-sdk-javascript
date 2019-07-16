import {map} from '../common/Mapper';
import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';
import StatisticsPerMuxing from './StatisticsPerMuxing';
import StatisticsPerStream from './StatisticsPerStream';

/**
 * @export
 * @class EncodingStats
 */
export class EncodingStats {
  /**
   * Date, format. yyyy-MM-dd
   * @type {Date}
   * @memberof EncodingStats
   */
  public date?: Date;

  /**
   * The id of the encoding (required)
   * @type {string}
   * @memberof EncodingStats
   */
  public encodingId: string;

  /**
   * Total bytes encoded
   * @type {number}
   * @memberof EncodingStats
   */
  public bytesEncoded?: number;

  /**
   * Total time encoded
   * @type {number}
   * @memberof EncodingStats
   */
  public timeEncoded?: number;

  /**
   * Downloaded size of the input file
   * @type {number}
   * @memberof EncodingStats
   */
  public downloadedSize?: number;

  /**
   * Billable minutes
   * @type {number}
   * @memberof EncodingStats
   */
  public billableMinutes?: number;

  /**
   * Detailed statistics per stream
   * @type {BillableEncodingMinutes[]}
   * @memberof EncodingStats
   */
  public billableEncodingMinutes?: BillableEncodingMinutes[];

  /**
   * Billable transmuxing minutes (required)
   * @type {number}
   * @memberof EncodingStats
   */
  public billableTransmuxingMinutes: number;

  /**
   * Billable feature minutes
   * @type {number}
   * @memberof EncodingStats
   */
  public billableFeatureMinutes?: number;

  /**
   * Detailed statistics per stream (required)
   * @type {StatisticsPerStream[]}
   * @memberof EncodingStats
   */
  public streams: StatisticsPerStream[];

  /**
   * Detailed statistics per muxing (required)
   * @type {StatisticsPerMuxing[]}
   * @memberof EncodingStats
   */
  public muxings: StatisticsPerMuxing[];

  /**
   * Detailed statistics per feature
   * @type {BillableEncodingFeatureMinutes[]}
   * @memberof EncodingStats
   */
  public features?: BillableEncodingFeatureMinutes[];

  constructor(obj: Partial<EncodingStats>) {
    this.date = map(obj.date, Date);
    this.encodingId = map(obj.encodingId);
    this.bytesEncoded = map(obj.bytesEncoded);
    this.timeEncoded = map(obj.timeEncoded);
    this.downloadedSize = map(obj.downloadedSize);
    this.billableMinutes = map(obj.billableMinutes);
    this.billableEncodingMinutes = map<BillableEncodingMinutes>(obj.billableEncodingMinutes, BillableEncodingMinutes);
    this.billableTransmuxingMinutes = map(obj.billableTransmuxingMinutes);
    this.billableFeatureMinutes = map(obj.billableFeatureMinutes);
    this.streams = map<StatisticsPerStream>(obj.streams, StatisticsPerStream);
    this.muxings = map<StatisticsPerMuxing>(obj.muxings, StatisticsPerMuxing);
    this.features = map<BillableEncodingFeatureMinutes>(obj.features, BillableEncodingFeatureMinutes);
  }
}

export default EncodingStats;

