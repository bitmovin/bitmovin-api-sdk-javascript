import {map} from '../common/Mapper';

/**
 * @export
 * @class SrtStatisticRecv
 */
export class SrtStatisticRecv {
  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public bytes?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public bytesDropped?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public bytesLost?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public mbitRate?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public packets?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public packetsBelated?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public packetsDropped?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public packetsLost?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticRecv
   */
  public packetsRetransmitted?: number;

  constructor(obj: Partial<SrtStatisticRecv>) {

    this.bytes = obj.bytes;
    this.bytesDropped = obj.bytesDropped;
    this.bytesLost = obj.bytesLost;
    this.mbitRate = obj.mbitRate;
    this.packets = obj.packets;
    this.packetsBelated = obj.packetsBelated;
    this.packetsDropped = obj.packetsDropped;
    this.packetsLost = obj.packetsLost;
    this.packetsRetransmitted = obj.packetsRetransmitted;
  }
}

export default SrtStatisticRecv;

