import {map} from '../common/Mapper';

/**
 * @export
 * @class SrtStatisticLink
 */
export class SrtStatisticLink {
  /**
   * @type {number}
   * @memberof SrtStatisticLink
   */
  public bandwidth?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticLink
   */
  public maxBandwidth?: number;

  /**
   * @type {number}
   * @memberof SrtStatisticLink
   */
  public rtt?: number;

  constructor(obj: Partial<SrtStatisticLink>) {

    this.bandwidth = obj.bandwidth;
    this.maxBandwidth = obj.maxBandwidth;
    this.rtt = obj.rtt;
  }
}

export default SrtStatisticLink;

