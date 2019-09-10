import {map, mapArray} from '../common/Mapper';

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

  constructor(obj?: Partial<SrtStatisticRecv>) {
    if(!obj) {
      return;
    }
    this.bytes = map(obj.bytes);
    this.bytesDropped = map(obj.bytesDropped);
    this.bytesLost = map(obj.bytesLost);
    this.mbitRate = map(obj.mbitRate);
    this.packets = map(obj.packets);
    this.packetsBelated = map(obj.packetsBelated);
    this.packetsDropped = map(obj.packetsDropped);
    this.packetsLost = map(obj.packetsLost);
    this.packetsRetransmitted = map(obj.packetsRetransmitted);
  }
}

export default SrtStatisticRecv;

