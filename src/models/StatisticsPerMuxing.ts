import {map} from '../common/Mapper';
import MuxingType from './MuxingType';

/**
 * @export
 * @class StatisticsPerMuxing
 */
export class StatisticsPerMuxing {
  /**
   * ID of the stream (required)
   * @type {string}
   * @memberof StatisticsPerMuxing
   */
  public streamId?: string;

  /**
   * ID of the muxing (required)
   * @type {string}
   * @memberof StatisticsPerMuxing
   */
  public muxingId?: string;

  /**
   * Multiplier for the encoded minutes. Depends on muxing type. (required)
   * @type {number}
   * @memberof StatisticsPerMuxing
   */
  public multiplicator?: number;

  /**
   * Encoded bytes. (required)
   * @type {number}
   * @memberof StatisticsPerMuxing
   */
  public encodedBytes?: number;

  /**
   * Resulting minutes you will be charged for. (required)
   * @type {number}
   * @memberof StatisticsPerMuxing
   */
  public billableMinutes?: number;

  /**
   * @type {MuxingType}
   * @memberof StatisticsPerMuxing
   */
  public muxingType?: MuxingType;

  constructor(obj: Partial<StatisticsPerMuxing>) {

    this.streamId = obj.streamId;
    this.muxingId = obj.muxingId;
    this.multiplicator = obj.multiplicator;
    this.encodedBytes = obj.encodedBytes;
    this.billableMinutes = obj.billableMinutes;
    this.muxingType = obj.muxingType;
  }
}

export default StatisticsPerMuxing;

