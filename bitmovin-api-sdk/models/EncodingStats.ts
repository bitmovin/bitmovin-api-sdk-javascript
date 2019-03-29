import {map} from '../common/Mapper';
import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';
import StatisticsPerMuxing from './StatisticsPerMuxing';
import StatisticsPerStream from './StatisticsPerStream';

/**
 * @export
 * @class EncodingStats
 */
export default class EncodingStats {
  constructor(obj: any) {
    this.date = map(obj.date);
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

  /**
   * Date, format. yyyy-MM-dd
   * @type {Date}
   * @memberof EncodingStats
   */
  public date?: Date;
  /**
   * The id of the encoding
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
   * @type {Array<BillableEncodingMinutes>}
   * @memberof EncodingStats
   */
  public billableEncodingMinutes?: Array<BillableEncodingMinutes>;
  /**
   * Billable transmuxing minutes
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
   * Detailed statistics per stream
   * @type {Array<StatisticsPerStream>}
   * @memberof EncodingStats
   */
  public streams: Array<StatisticsPerStream>;
  /**
   * Detailed statistics per muxing
   * @type {Array<StatisticsPerMuxing>}
   * @memberof EncodingStats
   */
  public muxings: Array<StatisticsPerMuxing>;
  /**
   * Detailed statistics per feature
   * @type {Array<BillableEncodingFeatureMinutes>}
   * @memberof EncodingStats
   */
  public features?: Array<BillableEncodingFeatureMinutes>;
}
