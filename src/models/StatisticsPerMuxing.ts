import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<StatisticsPerMuxing>) {
    if(!obj) {
      return;
    }
    this.streamId = map(obj.streamId);
    this.muxingId = map(obj.muxingId);
    this.multiplicator = map(obj.multiplicator);
    this.encodedBytes = map(obj.encodedBytes);
    this.billableMinutes = map(obj.billableMinutes);
    this.muxingType = map(obj.muxingType);
  }
}

export default StatisticsPerMuxing;

