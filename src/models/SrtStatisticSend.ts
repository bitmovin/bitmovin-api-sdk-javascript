import {map} from '../common/Mapper';

/**
 * @export
 * @class SrtStatisticSend
 */
export class SrtStatisticSend {
  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public bytes?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public bytesDropped?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public mbitRate?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packets?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packetsDropped?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packetsLost?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packetsRetransmitted?: number;

  constructor(obj: Partial<SrtStatisticSend>) {

    this.bytes = obj.bytes;
    this.bytesDropped = obj.bytesDropped;
    this.mbitRate = obj.mbitRate;
    this.packets = obj.packets;
    this.packetsDropped = obj.packetsDropped;
    this.packetsLost = obj.packetsLost;
    this.packetsRetransmitted = obj.packetsRetransmitted;
  }
}

export default SrtStatisticSend;

