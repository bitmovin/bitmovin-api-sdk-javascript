import {map} from '../common/Mapper';
import MuxingType from './MuxingType';

/**
 * @export
 * @class StatisticsPerMuxing
 */
export class StatisticsPerMuxing {
  constructor(obj: any) {
    this.streamId = map(obj.streamId);
    this.muxingId = map(obj.muxingId);
    this.multiplicator = map(obj.multiplicator);
    this.encodedBytes = map(obj.encodedBytes);
    this.billableMinutes = map(obj.billableMinutes);
    this.muxingType = map(obj.muxingType);
  }

  /**
   * ID of the stream
   * @type {string}
   * @memberof StatisticsPerMuxing
   */
  public streamId: string;
  /**
   * ID of the muxing
   * @type {string}
   * @memberof StatisticsPerMuxing
   */
  public muxingId: string;
  /**
   * Multiplier for the encoded minutes. Depends on muxing type.
   * @type {number}
   * @memberof StatisticsPerMuxing
   */
  public multiplicator: number;
  /**
   * Encoded bytes.
   * @type {number}
   * @memberof StatisticsPerMuxing
   */
  public encodedBytes: number;
  /**
   * Resulting minutes you will be charged for.
   * @type {number}
   * @memberof StatisticsPerMuxing
   */
  public billableMinutes: number;
  /**
   * @type {MuxingType}
   * @memberof StatisticsPerMuxing
   */
  public muxingType: MuxingType;
}

export default StatisticsPerMuxing;

